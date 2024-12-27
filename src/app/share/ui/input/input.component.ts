import { Component, Input } from "@angular/core";
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

  
// Список для добавления дополнительных классов к компоненту
export enum MainInputStyles {
  MAININPUT = 'mainInput',
  LOGININPUT = 'loginInput'
}

// Интрефейс для описания компонента
export interface InputInterface {
    classList?: string,
    classListFormly?: string,
    childSelect?: string,
    typeStyle?: MainInputStyles
}

@Component({
    selector: 'input-custom',
    templateUrl: 'input.component.html',
    styleUrl: 'input.component.scss'
})
export class InputCutstom extends FieldType<FieldTypeConfig> implements InputInterface {
    @Input() classList?: string | undefined;
    @Input() typeStyle?: MainInputStyles;
    public classListFormly!: string;
     
    constructor(){
        super();
        
        
    }

    ngOnInit() {
        this.classListFormly = this.props["additionalData"]?.classList;
    }

   
}