import { Component, Input } from "@angular/core";

@Component({
    selector: 'panel',
    templateUrl: './panel.component.html',
    styleUrl: './panel.component.scss',
})
export class Panel {
    @Input() name!: string;

    public isMain: false = false;

    constructor(

    ) {
    }

    
}