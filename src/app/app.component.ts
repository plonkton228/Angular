import { Component, ComponentRef, ContentChild, ElementRef, TemplateRef, ViewChild } from "@angular/core";



@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    
})
export class AppComponent{
    public contentPanels: Array<string> = ['js', 'css', 'Angular', 'React', 'html'];
    constructor()
    {};

    ngOnInit(){
    };

    ngAfterViewChecked() {
    };
    ngAfterContentInit() {
    };

};