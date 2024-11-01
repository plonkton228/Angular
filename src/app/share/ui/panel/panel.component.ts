import { Component, Input } from "@angular/core";
import { PanelInterface } from "./panelInterface";

@Component({
    selector: 'panel',
    templateUrl: './panel.component.html',
    styleUrl: './panel.component.scss',
})
export class Panel implements PanelInterface {
    @Input() name!: string; // Название панельки
    @Input() classList!: string; // Классы стилей
    @Input() isMain!: boolean; // Булевое значение


    constructor(

    ) {
    }

    
}