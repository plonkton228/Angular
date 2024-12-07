import { importProvidersFrom, NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule } from "@angular/platform-browser";
import { Card } from "./app/Card/card.component";
import { Icon } from "./app/share/ui/icon/icon.component";
import { Panel } from "./app/share/ui/panel/panel.component";
import { StyleAPI } from "./app/share/lib/StyleIAPI";
import { ButtonCustom } from "./app/share/ui/button/button.component";
import { ProfileService } from "./app/share/lib/profile.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        Card,
        Icon,
        Panel,
        ButtonCustom,
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        StyleAPI,
        ProfileService
    ],
    bootstrap: [
        AppComponent
    ],
})

export class AppModule {
}
