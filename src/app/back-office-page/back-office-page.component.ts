import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user-service/user.service";
import {AuthService} from "../services/auth-service/auth-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-back-office-page',
  templateUrl: './back-office-page.component.html',
  styleUrls: ['./back-office-page.component.css']
})
export class BackOfficePageComponent implements OnInit {


  adminForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private authService: AuthService) {

    this.adminForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password : ['', [Validators.required, Validators.minLength(5)]],
    });

  }

  removeItem(){

  }

  ngOnInit(): void {
  }

  removeFromAdmin(admin: User){
    this.userService.deleteUserById(admin.id).subscribe(data => {
      window.location.reload();
    })
  }

  postNewAdmin(){
    let body = {
      email : this.adminForm.get("email")?.value,
      firstName: this.adminForm.get("firstName")?.value,
      lastName: this.adminForm.get("lastName")?.value,
      password : this.adminForm.get("password")?.value,
    }

    this.authService.registerAdmin(body).subscribe(data => {
        window.location.reload();
      },
      err => {
        console.log(err)
        if(err.status == 400){
        }else{
        }
      })
  }

  deactivateVet(userId: string){
    this.authService.deVerifyVet(userId).subscribe(data => {
        window.location.reload();
      },
      err => {
        if(err.status == 400){

        }else{
        }
      })
  }


  validateVet(userId: string){
    this.authService.verifyVet(userId).subscribe(data => {
        window.location.reload();
      },
      err => {
        if(err.status == 400){
        }else{
        }
      })
  }

  refuseteVetProfile(userId: string){
    this.authService.refuseVet(userId).subscribe(data => {
        window.location.reload();
      },
      err => {
        if(err.status == 400){

        }else{
        }
      })
  }
}
