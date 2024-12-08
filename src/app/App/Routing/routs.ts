import { Element } from "@angular/compiler";
import { Component, Type } from "@angular/core";
import { Route,  } from "@angular/router";
import { Login } from "app/Widgets/ui/Login/login.component";



export enum PathsElementRout  {
   LOGIN = '/login',
   POSTS = '/posts',
}
interface ElementRouting {
    path: PathsElementRout,
    element: Type<any>
}

const Routing: Record<PathsElementRout,  ElementRouting> = {
    [PathsElementRout.LOGIN]: {
        path: PathsElementRout.LOGIN,
        element: Login
    },
    [PathsElementRout.POSTS]: {
        path: PathsElementRout.POSTS,
        element: Login
    }

}

export const Routs: Route[] = [
    Routing["/login"],
    Routing["/posts"]
]