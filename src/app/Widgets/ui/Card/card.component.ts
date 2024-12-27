import { Component, Input } from "@angular/core";
import { ProfileCard, ProfileService } from "app/share/lib/profile.service";
import { JoinClassFunc, ListKeysStyles, StyleAPI } from "app/share/lib/StyleIAPI";


@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class Card {
    public _joinClasses!: JoinClassFunc;
    public _listStyle!: ListKeysStyles;
    public _profiles!: ProfileCard[];
    public _profileApi!: ProfileService;

    constructor(
        styleApi: StyleAPI,
        profileApi: ProfileService,
    ) {
       this._joinClasses = styleApi.joinClasses;
       this._listStyle = styleApi.ListKey;
       this._profileApi = profileApi;
    };
  
    ngOnInit () {
        this._profileApi.getPostProfile()
        .subscribe((profiles: ProfileCard[]) => {
                this._profiles = profiles
        })
    };


}