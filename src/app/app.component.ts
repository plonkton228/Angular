import { Component, ComponentRef, ContentChild, ElementRef, Inject, Injector, TemplateRef, ViewChild } from "@angular/core";
import { JOIN_CLASS } from "./share/module/shareTokens";
import { JoinClassFunc } from "./share/lib/classJoin";




@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    
})
export class AppComponent{

    public contentPanels: Array<string> = ['js', 'css', 'Angular', 'React', 'html'];
    public _joinClass!: JoinClassFunc;   

    constructor(
        @Inject(JOIN_CLASS) private joinClass: JoinClassFunc
    )
    {
        this._joinClass = this.joinClass
    };

    ngOnInit(){
    };

    ngAfterViewChecked() {
    };
    ngAfterContentInit() {
    };

};