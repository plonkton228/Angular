import { Component } from "@angular/core";
import { JoinClassFunc,  StyleAPI } from "./share/lib/StyleIAPI";
import { ProfileService } from "./share/lib/profile.service";






@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    
})
export class AppComponent{

    public contentPanels: Array<string> = ['js', 'css', 'Angular', 'React', 'html'];
    public _joinClasses: JoinClassFunc;
    public _classesFromComponents;
    public _profiles: any[] = [];

    constructor(
        private styleApi: StyleAPI,
        private profileService: ProfileService,
    )
    {
       this._joinClasses = styleApi.joinClasses;
       this._classesFromComponents = styleApi.ListKey;
        profileService.getPostProfile()
       .subscribe((profile) => this._profiles = profile);
       
    };

    ngOnInit(){
    };

    ngAfterViewChecked() {
    };
    ngAfterContentInit() {
    };

};