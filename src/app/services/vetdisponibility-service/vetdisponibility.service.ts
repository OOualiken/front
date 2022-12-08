import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../auth-service/auth-service.service";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {VetDisponibility} from "../../models/vetDisponibility";

@Injectable({
  providedIn: 'root'
})
export class VetdisponibilityService {

  private baseUrl: string = environment.proxy+environment.baseUrl+"/appointment";

  constructor(private http: HttpClient,
              private router: Router, private authService: AuthService) { }

  postVetDisponibility(date: Date): Observable<VetDisponibility> {
    let header = this.authService.getAuthorizationHeadersWithToken()
    return this.http.post<VetDisponibility>(this.baseUrl+"/vet-disponibility",
      {
        date: date
      },
      {headers: header})
  }

  getVetDisponibility(vetId: string, date: Date): Observable<any>{
    let header = this.authService.getAuthorizationHeadersWithToken()
    return this.http.post<any>(this.baseUrl+"/disponibility-list/"+vetId,
      {
        date: date
      },
      {headers: header})
  }

  getBooking(vetDispoId: string, service: string, petId: string): Observable<any>{
    let header = this.authService.getAuthorizationHeadersWithToken()
    return this.http.post<any>(this.baseUrl+"/book/"+vetDispoId,
      {
        service: service,
        pet: petId,
      },
      {headers: header})
  }

  deleteBooking(vetDispoId: string): Observable<any>{
    let header = this.authService.getAuthorizationHeadersWithToken()
    return this.http.delete<any>(this.baseUrl+"/book/"+vetDispoId,
      {headers: header})
  }

  getMyAppointment(): Observable<any>{
    let header = this.authService.getAuthorizationHeadersWithToken()
    return this.http.get<any>(this.baseUrl, {headers: header}).pipe()
  }

}
