<?php

declare(strict_types=1);

namespace EF\Components;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Orchid\Screen\Field;
use Orchid\Screen\Concerns\ComplexFieldConcern;
use Orchid\Screen\Concerns\Multipliable;



class LiveSelect extends Field
{

    /**
     * Default attributes value.
     *
     * @var array
     */
    protected $attributes = [
        'class'        => 'form-control',
        'options'      => [],
        'allowEmpty'   => '',
        'allowAdd'     => false,
        'isOptionList' => false,
        'title' => 'Live Select',
        'placeholder' => 'Select an option...',
        'url' => 'https://api.github.com/search/repositories',
        'limit' => 10,
        'vals' => [],
        'required' => false,
        'includeCsrfToken' => false,
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

        return view('ef::live_select',array_merge($this->getAttributes(), [
            'id' => $this->getAttributes()['name'],
            'required' => $this->getAttributes()['required'] ? 'required' : '',
            'attributes'     => $this->getAllowAttributes(),
            'oldName'        => $this->getOldName(),
            'typeForm'       => $this->typeForm ?? $this->vertical()->typeForm,
        ]));

    }

}
