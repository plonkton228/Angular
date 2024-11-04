import { Component, Input } from "@angular/core";
// Интрефейс для описания компонента
export interface PanelInterface {
    name: string,
    isMain: boolean,
    classList: string,
 }

// Список для добавления дополнительных классов к компоненту
 export enum MainStylesPanel {
    MAIN = 'main'
 }

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