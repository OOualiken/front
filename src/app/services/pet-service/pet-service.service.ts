import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../auth-service/auth-service.service";
import {Pet} from "../../models/pet";

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  private baseUrl: string = environment.proxy+environment.baseUrl+"/pet";

  constructor(private http: HttpClient,
              private router: Router, private authService: AuthService) { }


  postPet(body: any): Observable<Pet> {
    let header = this.authService.getAuthorizationHeadersWithToken()
    return this.http.post<Pet>(this.baseUrl,
      {
        type: body.type,
        name: body.name,
        breed: body.breed,
        sex: body.sex,
        weight: body.weight,
        birthDate: body.birthDate,
        vaccinationRecord: body.vaccinationRecord,
        medicalRecord: body.medicalRecord,
      }, {headers: header})
  }

  putPet(body: any): Observable<Pet> {
    let header = this.authService.getAuthorizationHeadersWithToken()
    return this.http.put<Pet>(this.baseUrl,
      {
        type: body.type,
        name: body.name,
        breed: body.breed,
        sex: body.sex,
        weight: body.weight,
        birthDate: body.birthDate,
        vaccinationRecord: body.vaccinationRecord,
        medicalRecord: body.medicalRecord,
      }, {headers: header})
  }

  deletePet(id: string): Observable<any> {
    let header = this.authService.getAuthorizationHeadersWithToken()
    return this.http.delete<any>(this.baseUrl+"/"+id, {headers: header})
  }

  getPet(id: string): Observable<any> {
    let header = this.authService.getAuthorizationHeadersWithToken()
    return this.http.get<any>(this.baseUrl+"/"+id, {headers: header})
  }
}
