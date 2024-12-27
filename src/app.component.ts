import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "app/app.component";
import { ButtonCustom, Description, FormService, Icon, InputCutstom, Panel, PipeImageUrl, ProfileService, StyleAPI } from "app/share";
import { Card, listCustomInnerComponents } from "app/Widgets";
import { Login } from "app/Widgets/ui/Login/login.component";
import { provideRouter, RouterOutlet } from "@angular/router";
import { Routs } from "app/App/Routing/routs";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormCustom } from "app/Widgets/ui/Form/form.component";

@NgModule({
    declarations: [
        AppComponent,
        Card,
        Icon,
        Panel,
        InputCutstom,
        ButtonCustom,
        Description,
        PipeImageUrl,
        Login,
        FormCustom
    ],
    imports: [
        BrowserModule,
        RouterOutlet,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        FormlyModule.forRoot({types: listCustomInnerComponents}),
        FormlyBootstrapModule,

    ],
    providers: [
        StyleAPI,
        ProfileService,
        FormService,
        provideRouter(Routs)
    ],
    bootstrap: [
        AppComponent
    ],
})

export class AppModule {
}
