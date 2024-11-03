import { Injectable } from "@angular/core";
import { AppModule } from "../../../app.component";


// Описание интрефейсов всех методов StyleAPI

// Описание аргумента метода joinClasses
interface ClassesStyle {
    mainClass: string,
    otherClasses?: Array<String>,
    booleanClasses?: Record<string, boolean>
}


// Описание типов StyleAPI

// Тип для метода joinClasses
export type JoinClassFunc = (args: ClassesStyle) => string;

@Injectable({providedIn: AppModule})
export class StyleAPI {
    constructor(){
    };

   /** Метод для обьединения стилей 
    * 
    * @param args 
    * @returns {string}
    */
    public joinClasses(args: ClassesStyle): string {
        return [
            args.mainClass,
            ...(args.otherClasses || []),
            ...Object.entries(args.booleanClasses || {}).filter(([_, value]) => value)
                .map(([key]) => key)
        ].join(' ');
    }
}