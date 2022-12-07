import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../auth-service/auth-service.service";
import {User} from "../../models/user";
import {Observable} from "rxjs";
import {Schedule} from "../../models/schedule";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.proxy+environment.baseUrl+"/user";

  constructor(private http: HttpClient,
              private router: Router, private authService: AuthService) { }

  getCurrentUser(): Observable<User>{
    let header = this.authService.getAuthorizationHeadersWithToken()
    return this.http.get<User>(this.baseUrl, {headers: header}).pipe()
  }


  putUser(body: any) : Observable<User>{
    let header = this.authService.getAuthorizationHeadersWithToken()
    console.log(body)
    if(body.role === "veterinary"){
      return this.updateVet(body, header)
    }else {
      return this.updateUser(body, header)
    }
  }

  updateUser(body: any, header: HttpHeaders) : Observable<User>{
    return this.http.put<User>(this.baseUrl,
      {
        firstName: body.firstName,
        lastName: body.lastName,
        password: body.password,
        phoneNb: body.phoneNb
      }, {headers: header}
    )
  }

  updateVet(body: any, header: HttpHeaders) : Observable<User>{
    return this.http.put<User>(this.baseUrl,
      {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phoneNb: body.phoneNb,
        password: body.password,
        speciality: body.speciality.toLowerCase(),
        appointmentType: body.appointmentType,
        street: body.street,
        postalCode: body.postalCode,
        city: body.city,
      }, {headers: header}
    )
  }
  updateUserSchedule(schedule: Schedule){

  }
}
