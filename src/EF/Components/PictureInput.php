<?php

declare(strict_types=1);

namespace EF\Components;

use Orchid\Screen\Field;


class PictureInput extends Field
{

    /**
     * Default attributes value.
     *
     * @var array
     */
    protected $attributes = [
        'class' => 'form-control',
        'title' => 'Picture input',
        'required' => false,
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

        return view('ef::pictures.input',array_merge($this->getAttributes(), [
            'id' => $this->getAttributes()['name'],
            'required' => $this->getAttributes()['required'] ,
            'attributes'     => $this->getAllowAttributes(),
            'oldName'        => $this->getOldName(),
            'typeForm'       => $this->typeForm ?? $this->vertical()->typeForm,
        ]));

    }

}
