import { Component, Input } from "@angular/core";

// Интрефейс для описания компонента
export interface IconInterface {
  path: string,
  classList: string,
}

// Список для добавления дополнительных классов к компоненту
export enum MainStylesIcon {
  ICON_PROFILE = 'icon_profile'
}


@Component({
    selector: 'icon',
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss',
})
export class Icon implements IconInterface {
    @Input() public path!: string; // Путь до картинки
    @Input() public classList!: string; // Лист классов стилизации
    
  constructor(
    ) {
    }
   
  
}