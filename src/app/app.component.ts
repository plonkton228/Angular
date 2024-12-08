import { Component } from "@angular/core";
import { JoinClassFunc,  ListKeysStyles,  StyleAPI } from "app/share/lib/StyleIAPI";
import { ProfileService } from "app/share/lib/profile.service";





@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    
})
export class AppComponent{
    public _joinClasses: JoinClassFunc;
    public _classesFromComponents: ListKeysStyles;
    public _apiService: ProfileService;
    public _profiles: any[] = [];

    constructor(
        private styleApi: StyleAPI,
        private profileService: ProfileService,
    )
    {
       this._joinClasses = styleApi.joinClasses;
       this._classesFromComponents = styleApi.ListKey;
       this._apiService = profileService
    };

    ngOnInit(){
        this._apiService.getPostProfile()
        .subscribe((profile) => this._profiles = profile);
    };

    ngAfterViewChecked() {
    };
    ngAfterContentInit() {
    };

};