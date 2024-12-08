import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'pipeUrl'
})
export class PipeImageUrl implements PipeTransform {
    constructor(){};
   transform(value: any, ...args: any[]) {
    return `https://icherniakov.ru/yt-course/${value}`;
   };
}