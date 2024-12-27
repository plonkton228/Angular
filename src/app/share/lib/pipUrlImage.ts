import { Pipe, PipeTransform } from "@angular/core";


interface ArgumentsTypes {
    absolutePath?: boolean
}

@Pipe({
    name: 'pipeUrl'
})
export class PipeImageUrl implements PipeTransform {
    constructor(){}; 
   transform(value: any, ...args: ArgumentsTypes[]) {
    return `https://icherniakov.ru/yt-course/${value}`;
   };
}