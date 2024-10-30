import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule } from "@angular/platform-browser";
import { Card } from "./app/Card/card.component";
import { Icon } from "./app/share/icon/icon.component";
import { Panel } from "./app/share/panel/panel.component";


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
    providers: [],
    bootstrap: [
        AppComponent
    ],
})

export class AppModule {
}
