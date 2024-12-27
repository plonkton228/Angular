import { Component } from "@angular/core";
import { MainInputStyles, StyleAPI } from "app/share";
import { JoinClassFunc, ListKeysStyles } from "app/share/lib/StyleIAPI";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrl: 'login.component.scss'
})
export class Login {
    public _joinClasses!: JoinClassFunc;
    public _listStyle!: ListKeysStyles;
    public _styleApi!: StyleAPI;
    public _model: any[] = []

    constructor(
        styleApi: StyleAPI
    ) {
        this._joinClasses = styleApi.joinClasses;
        this._listStyle = styleApi.ListKey;
        this._model = [
            {email: '', password: '', classList: this._joinClasses({mainClass: MainInputStyles.MAININPUT, otherClasses: [MainInputStyles.LOGININPUT]})}
        ]
    };

    ngOnInit() {
          
    }
    
}