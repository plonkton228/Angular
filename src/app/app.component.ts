import { Component, ComponentRef, ContentChild, ElementRef, Inject, Injector, TemplateRef, ViewChild } from "@angular/core";
import { JoinClassFunc, StyleAPI } from "./share/lib/StyleIAPI";
import { AdditinalStylesButton } from "./share/ui/button/button.component";





@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    
})
export class AppComponent{

    public contentPanels: Array<string> = ['js', 'css', 'Angular', 'React', 'html'];
    public _joinClasses: JoinClassFunc;
    public _classesButton: Array<AdditinalStylesButton> = [];

    constructor(
        private styleApi: StyleAPI
    )
    {
       this._joinClasses = styleApi.joinClasses;
       this._classesButton.push(AdditinalStylesButton.BUTTON_PROFILE_WIDE)
       
    };

    ngOnInit(){
    };

    ngAfterViewChecked() {
    };
    ngAfterContentInit() {
    };

};