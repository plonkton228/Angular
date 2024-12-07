import { inject, Injectable } from "@angular/core";
import { AppModule } from "../../../app.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
    providedIn: AppModule
})
export class ProfileService {
    private baseUrl = 'https://icherniakov.ru/yt-course/';
    private http = inject(HttpClient);
    public getPostProfile(): Observable<any[]> {
       return this.http.get<any[]>(`${this.baseUrl}/account/test_accounts`);
    }
}