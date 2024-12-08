import { Component, Input } from "@angular/core";

// Интрефейс для описания компонента
export interface DescriptionInterface {
    classList: string,
    textOption?: typeof MainStyleDescription,
    text?: string,
  }

// Список описывающий стили Description
export enum MainStyleDescription {
   MAINDESCRIPTION = 'mainDescription',
   DESCRIPTIONP = 'description_p',
   DESCRIPTIONH1 = 'description_h1',
   DESCRIPTIONDIV = 'description_div',
};

@Component({
    selector: 'description',
    templateUrl: './description.module.html',
    styleUrl: './description.module.scss'
})

export class Description implements DescriptionInterface {
    @Input() text!: string;
    @Input() textOption?: typeof MainStyleDescription;
    @Input() classList!: string;
       
    constructor(){}
}