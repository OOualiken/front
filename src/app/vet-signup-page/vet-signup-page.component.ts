import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {SPECIALITYLIST} from '../Constant'

@Component({
  selector: 'app-vet-signup-page',
  templateUrl: './vet-signup-page.component.html',
  styleUrls: ['./vet-signup-page.component.css']
})
export class VetSignupPageComponent implements OnInit {


  registerForm: FormGroup;
  connectForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      phoneNb: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]],
      email : ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate : ['', [Validators.required]],
      password : ['', [Validators.required, Validators.minLength(5)]],
      remember: ['', []]
    });

    this.connectForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]],
      remember: ['', []]
    });
    this.maxDate = new Date();
  }

  ngOnInit(): void {
  }

  maxDate: Date;
  isSignIn: boolean = true;
  hide : boolean = true;
  remember : boolean = false;


  signInToUp(){
    this.isSignIn = !this.isSignIn;
  }

  signIn(){
    console.log(this.connectForm.value)
  }

  signUp(){
    console.log(this.registerForm.value)
  }
}
