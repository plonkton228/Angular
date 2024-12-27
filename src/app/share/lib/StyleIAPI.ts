import { Injectable } from "@angular/core";
import { AppModule } from "../../../app.component";
import { MainInputStyles, MainStyleDescription, MainStylesButton, MainStylesIcon, MainStylesPanel } from "..";



// Описание интрефейсов всех методов StyleAPI

// Описание аргумента метода joinClasses
interface ClassesStyle {
    mainClass: string,
    otherClasses?: Array<String>,
    booleanClasses?: Record<string, boolean>
}

// Описание обьекта который возвращает метод getClassesFromComponent
export type ListKeysStyles =  {
    button: typeof MainStylesButton,
    icon: typeof MainStylesIcon,
    panel: typeof MainStylesPanel,
    description: typeof MainStyleDescription,
    input: typeof MainInputStyles,

 };

 // Интерфейс, использующий Mapped Type

 export type ReturnObjectClassesComponent<T> = {
     [K in  keyof ListKeysStyles]: {
         [P in keyof  T]: T[P];
     };
 }

 


// Тип для метода joinClasses
export type JoinClassFunc = (args: ClassesStyle) => string;

@Injectable({providedIn: AppModule})
export class StyleAPI {
    constructor(){
    };

    // Лист стилей
    public ListKey: ListKeysStyles = {
        button: MainStylesButton,
        icon: MainStylesIcon,
        panel: MainStylesPanel,
        description: MainStyleDescription,
        input: MainInputStyles,
      }
       

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