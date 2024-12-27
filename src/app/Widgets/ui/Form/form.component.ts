import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormService } from "app/share";

// Дополнительные опции для Form
export interface FormCustomType {
  model: any,

}

@Component({
    selector: 'form-custom',
    templateUrl: 'form.component.html',
    styleUrl: 'form.component.scss'
})
export class FormCustom implements FormCustomType {
    @Input() public model!: any;
    public _fields!: FormlyFieldConfig[];

    public _form: FormGroup = new FormGroup({});
    public _formService!: FormService;
    

    constructor(
        serviceFormApi: FormService
    ) {
        this._formService = serviceFormApi;
    };

    ngOnInit() {
       this._fields = this._formService.createFormOptions(this.model);
       console.log(this._fields, 'fieleds')
       console.log(this.model, 'model')
    }


}