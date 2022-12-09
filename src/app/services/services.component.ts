import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PetServiceService} from "./pet-service/pet-service.service";
import {Pet} from "../models/pet";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../models/user";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  recordForm: FormGroup;
  pet!: Pet
  profile!: User

  sexList: [{ type: string; value: string }, { type: string; value: string }] = [
    {type: 'male', value: "male"},
    {type: 'femelle', value: "female"}
  ]
  today: Date = new Date();

  constructor(private formBuilder: FormBuilder, private petService: PetServiceService,
              private router: Router, private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      console.log(data)
      this.profile = data.profile
    });

    this.recordForm = this.formBuilder.group({
      type: ['', [ Validators.required]],
      name : ['', [Validators.required]],
      breed: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      birthDate : ['', [Validators.required]],
      vaccinationRecord: this.formBuilder.array([]),
      medicalRecord: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
  }

  savePet(){
    let pet : Pet = this.fromFormToPet();

    this.petService.postPet(pet).subscribe(data => {
      this.router.navigate(["/services"]).then(() => {
        window.location.reload();
      });
    }, err => {
    })
  }

  deletePet(id: string){
    this.petService.deletePet(id).subscribe(data => {
      console.log(data)
      this.router.navigate(["/services"]).then(() => {
        window.location.reload();
      });
    }, err => {
      console.log(err)
    })
  }

  fromFormToPet() : Pet{
    return new Pet(
      this.recordForm.get('name')?.value,
      this.recordForm.get('type')?.value,
      this.recordForm.get('breed')?.value,
      this.recordForm.get('sex')?.value.toLowerCase(),
      this.recordForm.get('weight')?.value,
      this.recordForm.get('birthDate')?.value,
      [],
      [],
    )
  }

  isSexChecked(radio :string): boolean{
    if(!this.pet) return false
    return this.pet.sex.toLowerCase() == radio.toLowerCase()
  }
}
