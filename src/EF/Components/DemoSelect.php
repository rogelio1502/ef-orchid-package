<?php

namespace EF\Components;
use Orchid\Screen\Field;
use Orchid\Screen\Concerns\ComplexFieldConcern;

class DemoSelect extends Field
{
   
    protected $attributes = [
        'class'        => 'form-control',
        'allowEmpty'   => '',
        'allowAdd'     => false,
        'isOptionList' => false,
        'placeholder' => 'Tom Select',
        'autocomplete' => false,
        'multiple' => '',
        'valueField' => 'value',
        'labelField' => 'text',
        'searchField' => 'text',
        'remoteUrl' => '',
        'minToSearch' => 5,
        'debounce' => 500,
        'required' => false

    ];

    public function getProperties(){
        return $this->properties;
    }

    public function __construct(){}

    public function render()
    {
        if (! $this->isSee()) {
            return;
        }

        $this
            ->checkRequired()
            ->modifyName()
            ->modifyValue()
            ->runBeforeRender()
            ->translate()
            ->checkError();

        $id = $this->getId();

        $this->set('id', $id);

        return view('ef::demo_select',array_merge($this->getAttributes(), [
            'attributes'     => $this->getAllowAttributes(),
            'id'             => $id,
            'oldName'        => $this->getOldName(),
            'typeForm'       => $this->typeForm ?? $this->vertical()->typeForm,
        ]));

    }

}