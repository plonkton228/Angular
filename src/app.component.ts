import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule } from "@angular/platform-browser";
import { Card } from "./app/Card/card.component";
import { Icon } from "./app/share/ui/icon/icon.component";
import { Panel } from "./app/share/ui/panel/panel.component";
import { StyleAPI } from "./app/share/lib/StyleIAPI";
import { ButtonCustom } from "./app/share/ui/button/button.component";

@NgModule({
    declarations: [
        AppComponent,
        Card,
        Icon,
        Panel,
        ButtonCustom,
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        StyleAPI
    ],
    bootstrap: [
        AppComponent
    ],
})

export class AppModule {
}
