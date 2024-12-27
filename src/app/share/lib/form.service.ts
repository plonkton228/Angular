import { Injectable } from "@angular/core";
import { AppModule } from "app.component";
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { InnerCustomComponents } from "app/Widgets";

@Injectable({
    providedIn: AppModule
})
export class FormService extends FieldType {
   public createFormOptions(model: any[]): FormlyFieldConfig[] {
    let result: FormlyFieldConfig[] = [];
    model.forEach((modelElement, index) => {
      result[index] = {};  
      result[index].fieldGroup =  Object.entries(modelElement).map(([key,value]): FormlyFieldConfig => {
          return {
            defaultValue: value,
            key: key
          }
       })
    })
     return result;
    }
} 