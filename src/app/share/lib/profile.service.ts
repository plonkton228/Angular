import { inject, Injectable } from "@angular/core";
import { AppModule } from "../../../app.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// Интерфейс описывающий карточку пользователя в соц сети
export interface ProfileCard {
    "id": number,
    "username": string,
    "avatarUrl": string,
    "subscribersAmount": number,
    "firstName": string,
    "lastName": string,
    "isActive": boolean,
    "stack": string[],
    "city": string,
    "description": string,
};

// API для профиля
@Injectable({
    providedIn: AppModule
})
export class ProfileService {
    private baseUrl = 'https://icherniakov.ru/yt-course';
    private http = inject(HttpClient);

    /** Метод получения карточек пользователей соц сети.
     * 
     * @returns { ProfileCard[] }
     */
    public getPostProfile(): Observable<ProfileCard[]> {
       return this.http.get<ProfileCard[]>(`${this.baseUrl}/account/test_accounts`);
    }
}