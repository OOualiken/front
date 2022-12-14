
import { Component } from '@angular/core';
import {UserService} from "./services/user-service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Vetservice';
  sideBarOpen = false;
  isConnected: boolean = false
  role: string = ""


  constructor(private userService: UserService) {
    this.userService.getCurrentUser().subscribe(data => {
      this.sideBarOpen = true
      this.isConnected = true
      this.role = data.role
    }, err =>  {
    })
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
