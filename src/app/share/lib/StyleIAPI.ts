import { Injectable } from "@angular/core";
import { AppModule } from "../../../app.component";
import { MainStylesIcon } from "../ui/icon/icon.component";
import { MainStylesButton } from "../ui/button/button.component";
import { MainStylesPanel } from "../ui/panel/panel.component";


// Описание интрефейсов всех методов StyleAPI

// Описание аргумента метода joinClasses
interface ClassesStyle {
    mainClass: string,
    otherClasses?: Array<String>,
    booleanClasses?: Record<string, boolean>
}

// Описание обьекта который возвращает метод getClassesFromComponent
type ListKeysStyles =  {
    button: typeof MainStylesButton,
    icon: typeof MainStylesIcon,
    panel: typeof MainStylesPanel

 };

 // Интерфейс, использующий Mapped Type

 export type ReturnObjectClassesComponent<T> = {
     [K in  keyof ListKeysStyles]: {
         [P in keyof  T]: T[P];
     };
 }

 
export type StylesType = typeof MainStylesIcon | typeof MainStylesButton | typeof MainStylesPanel
// Описание типов StyleAPI

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
        panel: MainStylesPanel
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