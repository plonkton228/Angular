import { Type } from "@angular/core";
import { Route } from "@angular/router";
import { Card } from "app/Widgets";
import { Login } from "app/Widgets/ui/Login/login.component";



export enum PathsElementRout  {
   MAIN = 'main',
   LOGIN = 'login',
}
interface ElementRouting {
    path: PathsElementRout,
    component: Type<any>
}

const Routing: Record<PathsElementRout,  ElementRouting> = {
    [PathsElementRout.LOGIN]: {
        path: PathsElementRout.LOGIN,
        component: Login
    },
    [PathsElementRout.MAIN]: {
        path: PathsElementRout.MAIN,
        component: Card
    }

}

export const Routs: Route[] = [
    Routing[PathsElementRout.LOGIN],
    Routing[PathsElementRout.MAIN],
    {path: "**", redirectTo: PathsElementRout.MAIN}
] 