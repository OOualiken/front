import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.proxy+environment.baseUrl+"/auth";

  constructor(private http: HttpClient,
              private router: Router) {}

  login(body: any): boolean{
    this.http.post<any>(this.baseUrl+"/login",
      body
    ).subscribe(data => {
        AuthService.saveToken(data.token)
        this.showToaster("Bienvenue, vous êtes connecté!")
        this.router.navigate(['/profile']).then(() => {
          window.location.reload();
        });

      },
      err => {
        console.log(err)
        if(err.status == 412){
          this.showToaster("Votre compte n'as pas encore été validé par notre équipe, veuillez attendre le mail de confirmation.")
        }else {
          this.showToaster("L'utilisateur n'existe pas pour ces informations, veuillez réessayer!")
        }
      })
    return false
  }

  private static saveToken(token: string){
    localStorage.setItem("token", token)
  }

  logout(){
    localStorage.removeItem("token")
  }

  registerUser(body: any) {
    this.http.post<any>(this.baseUrl+"/register/client",
      {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        phoneNb: body.phoneNb
      }
    ).subscribe(data => {
        AuthService.saveToken(data.result)
        this.showToaster("Bienvenue, vous êtes connecté!")
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      },
      err => {
        console.log(err)
        if(err.status == 400){
          this.showToaster("Un utilisateur avec cette adresse mail existe déjà, veuillez modifier l'email!")
        }
        else{
          this.showToaster("Il y a une erreur dans votre formulaire, réessayer plus tard!")
        }
      })
    return false
  }

  registerVet(body: any) {
    this.http.post<any>(this.baseUrl+"/register/vet",
      {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        phoneNb: body.phoneNb,
        speciality: body.speciality,
        role: "veterinary",
        street: body.street,
        postalCode: body.postalCode,
        city: body.city,
      }
    ).subscribe(data => {
        AuthService.saveToken(data.result)
        this.showToaster("Bienvenue, vous êtes connecté!")
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      },
      err => {
        console.log(err)
        if(err.status == 400){
          this.showToaster("Un utilisateur avec cette adresse mail existe déjà, veuillez modifier l'email!")
        }
        else{
          this.showToaster("Il y a une erreur dans votre formulaire, réessayer plus tard!")
        }
      })
    return false
  }

  registerAdmin(body: any): Observable<User> {
    let header = this.getAuthorizationHeadersWithToken()
    return this.http.post<User>(this.baseUrl+"/register/admin",
      {
        email: body.email,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName
      }, {headers: header})
  }

  verifyVet(id: string): Observable<any> {
    return this.http.put<any>(this.baseUrl+"/verify-vet/"+id,
      {}, { headers:  this.getAuthorizationHeadersWithToken()}
    )
  }

  deVerifyVet(id: string): Observable<any> {
    return this.http.put<any>(this.baseUrl+"/deactivate/"+id,
      {}, { headers:  this.getAuthorizationHeadersWithToken()}
    )
  }

  refuseVet(id: string): Observable<any> {
    return this.http.put<any>(this.baseUrl+"/refuse/"+id,
      {}, { headers:  this.getAuthorizationHeadersWithToken()}
    )
  }

  showToaster(message: string) {
    //this.toastService.showMessage(message);
  }

  getAuthorizationHeadersWithToken(): HttpHeaders {
    let token: string = <string>localStorage.getItem("token")
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer `+token
    })
  }
}
