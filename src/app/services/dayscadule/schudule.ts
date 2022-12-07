/*async AddDayScheduleSchema(veterinaryId: string, date: string) : Promise<Observable<dayScaduleReponse>> {
  const path: string = "/dayschedules";
const finalpathapi: string = finalpath+ path;
const token = await this.authservice.getUserToken();
var string1 = JSON.stringify(token);
var accessToken = JSON.parse(string1);
const data = {date, veterinaryId}
return this._httpClient.post<dayScaduleReponse>(finalpathapi, data, {headers: headersWithToken(accessToken)});

}*/


import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {Observable} from "rxjs";
import {AuthService} from "../auth-service/auth-service.service";
import {dayScaduleReponse} from "../../models/dayScaduleResponse";
const AUTH_API = 'http://localhost:8080/';
const finalpath = environment.proxy+AUTH_API;

@Injectable({
  providedIn: 'root'
})
export class Schudule {

  private baseUrl: string = environment.proxy+environment.baseUrl+"/auth";

  constructor(private http: HttpClient,
              private router: Router,private authservice : AuthService) {}



  async AddDayScheduleSchema(veterinaryId: string, date: string) : Promise<Observable<dayScaduleReponse>> {
    const path: string = "/dayschedules";
    const finalpathapi: string = finalpath+ path;
   // const token = await this.authservice.getUserToken();
   // var string1 = JSON.stringify(token);
    //var accessToken = JSON.parse(string1);
    const data = {date, veterinaryId}
    return this.http.post<dayScaduleReponse>(finalpathapi, data, );

  }

}
