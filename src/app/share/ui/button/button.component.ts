import { Component, Input } from "@angular/core";

// Интрефейс для описания компонента
export interface ButtonInterface {
    classList: string,
    name?: string,
    childSelect?: string,
  }
  
  // Список для добавления дополнительных классов к компоненту
export enum AdditinalStylesButton {
    BUTTON_PROFILE_WIDE = 'buttonProfileWide'
  }

@Component({
    selector: 'button-custom',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'

})

export class ButtonCustom implements ButtonInterface {
   @Input() public classList!: string;
   @Input() public name?: string | undefined;
   @Input() public childSelect?: string | undefined;

   constructor(){

   }
   
}