import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "app/app.component";
import { ButtonCustom, Description, Icon, Panel, PipeImageUrl, ProfileService, StyleAPI } from "app/share";
import { Card } from "app/Widgets";
import { Login } from "app/Widgets/ui/Login/login.component";

@NgModule({
    declarations: [
        AppComponent,
        Card,
        Icon,
        Panel,
        ButtonCustom,
        Description,
        PipeImageUrl,
        Login,
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
