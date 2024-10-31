import { Component, Input } from "@angular/core";
import { IconInterface } from "./iconInterface";

@Component({
    selector: 'icon',
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss',
})
export class Icon implements IconInterface {
    @Input() public path!: string; // Путь до картинки

  constructor(
    ) {
    }
   
  
}