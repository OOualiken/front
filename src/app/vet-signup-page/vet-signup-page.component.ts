import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {AuthService} from "../services/auth-service/auth-service.service";

@Component({
  selector: 'app-vet-signup-page',
  templateUrl: './vet-signup-page.component.html',
  styleUrls: ['./vet-signup-page.component.css']
})
export class VetSignupPageComponent implements OnInit {


  registerForm: FormGroup;
  connectForm: FormGroup;
  submitted = false;
  isSignIn: boolean = true;
  hide : boolean = true;
  remember : boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = this.formBuilder.group({
      phoneNb: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]],
      email : ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      speciality : ['', [Validators.required]],
      password : ['', [Validators.required, Validators.minLength(5)]],
      street : ['', [Validators.required]],
      postalCode : ['', [Validators.required]],
    });

    this.connectForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]],
      remember: ['', []]
    });
  }

  ngOnInit(): void {
  }

  signInToUp(){
    this.isSignIn = !this.isSignIn;
  }

  signIn(){
    this.authService.login(this.connectForm.value)
  }

  signUp(){
    this.authService.registerVet(this.registerForm.value)
  }
}
