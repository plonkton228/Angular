import { Component, Input } from "@angular/core";
import { ProfileCard } from "app/share/lib/profile.service";
import { JoinClassFunc, ListKeysStyles, StyleAPI } from "app/share/lib/StyleIAPI";


@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class Card {
    public _joinClasses!: JoinClassFunc;
    public _listStyle!: ListKeysStyles;
    @Input() profile!: ProfileCard;

    constructor(
        styleApi: StyleAPI
    ) {
       this._joinClasses = styleApi.joinClasses;
       this._listStyle = styleApi.ListKey;
    };
  
    ngOnInit () {
        console.log(this.profile, 'profile')
    };


}