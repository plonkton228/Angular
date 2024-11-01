import { Component, Input } from "@angular/core";


export interface IconInterface {
  path: string,
  classList: string,
}

export enum AdditinalStylesIcon {
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