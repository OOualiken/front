import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user-service/user.service";
import {ActivatedRoute} from "@angular/router";

export interface PeriodicElement {
  name: string;
  position: number;
  prenom: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', prenom: 1.0079, date: 'H'},
  {position: 2, name: 'Helium', prenom: 4.0026, date: 'He'},
  {position: 3, name: 'Lithium', prenom: 6.941, date: 'Li'},
  {position: 4, name: 'Beryllium', prenom: 9.0122, date: 'Be'},
  {position: 5, name: 'Boron', prenom: 10.811, date: 'B'},
  {position: 6, name: 'Carbon', prenom: 12.0107, date: 'C'},
  {position: 7, name: 'Nitrogen', prenom: 14.0067, date: 'N'},
  {position: 8, name: 'Oxygen', prenom: 15.9994, date: 'O'},
  {position: 9, name: 'Fluorine', prenom: 18.9984, date: 'F'},
  {position: 10, name: 'Neon', prenom: 20.1797, date: 'Ne'},
];


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user!: User
  isConnected: boolean = false

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.user = data.profile;
    });
  }

  displayedColumns: string[] = ['position', 'name', 'prenom', 'date'];
  dataSource = ELEMENT_DATA;

  /** Gets the total cost of all transactions. */

  ngOnInit(): void {

  }

}
