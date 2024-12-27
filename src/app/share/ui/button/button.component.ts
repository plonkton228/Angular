import { Component, Input } from "@angular/core";
import { FieldType } from "@ngx-formly/bootstrap/form-field";

  // Список для добавления дополнительных классов к компоненту
export enum MainStylesButton {
    BUTTON_PROFILE_WIDE = 'buttonProfileWide',
    BUTTON_PROFILE_NARROW = 'buttonProfileNarrow',
  }


  // Интрефейс для описания компонента
export interface ButtonInterface {
  classList: string,
  name?: string,
  childSelect?: string,
  type?: MainStylesButton
}


@Component({
    selector: 'button-custom',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'

})

export class ButtonCustom  extends FieldType implements ButtonInterface  {
   @Input() public classList!: string;
   @Input() public name?: string | undefined;
   @Input() public childSelect?: string | undefined;
   @Input() public type?: MainStylesButton; 
   
   constructor(){
     super();
   }

   ngOnInit(){

  };


   
}