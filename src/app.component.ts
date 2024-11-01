import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule } from "@angular/platform-browser";
import { Card } from "./app/Card/card.component";
import { Icon } from "./app/share/ui/icon/icon.component";
import { Panel } from "./app/share/ui/panel/panel.component";
import { classJoin } from "./app/share/lib/classJoin";
import { JOIN_CLASS } from "./app/share/module/shareTokens";

@NgModule({
    declarations: [
        AppComponent,
        Card,
        Icon,
        Panel,
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        {provide: JOIN_CLASS, useValue: classJoin}
    ],
    bootstrap: [
        AppComponent
    ],
})

export class AppModule {
}
