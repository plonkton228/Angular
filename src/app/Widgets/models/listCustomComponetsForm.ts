import { Type } from "@angular/core";
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { ButtonCustom, InputCutstom } from "app/share";


// Типы для кастомных компонентов которые могут быть добавлены в кастомную форму
export enum InnerCustomComponents{
    BUTTON = 'button-custom',
    INPUT = 'inputСustom'
}

interface InnerCustomComponent {
    name:  typeof InnerCustomComponents[keyof typeof InnerCustomComponents];
    component: Type<FieldType<FieldTypeConfig>>,
    wrappers: string[]

}

// Лист компонетов которые могут быть в form
export const listCustomInnerComponents: InnerCustomComponent[]  = [
      {name: InnerCustomComponents.INPUT, component: InputCutstom,  wrappers: ['form-field']},
]