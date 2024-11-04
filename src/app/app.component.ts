import { Component, ComponentRef, ContentChild, ElementRef, Inject, Injector, TemplateRef, ViewChild } from "@angular/core";
import { JoinClassFunc, ReturnObjectClassesComponent, StyleAPI, StylesType } from "./share/lib/StyleIAPI";
import { MainStylesButton } from "./share/ui/button/button.component";





@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    
})
export class AppComponent{

    public contentPanels: Array<string> = ['js', 'css', 'Angular', 'React', 'html'];
    public _joinClasses: JoinClassFunc;
    public _classesFromComponents

    constructor(
        private styleApi: StyleAPI
    )
    {
       this._joinClasses = styleApi.joinClasses;
       this._classesFromComponents = styleApi.getClassesFromComponent([MainStylesButton], ['button']) 
       console.log(this._classesFromComponents, 'sdsd')
    };

    ngOnInit(){
    };

    ngAfterViewChecked() {
    };
    ngAfterContentInit() {
    };

};