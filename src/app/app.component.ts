
import { Component } from '@angular/core';
import {UserService} from "./services/user-service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Vetservice';
  sideBarOpen = true;
  isConnected: boolean = false
  role: string = ""


  constructor(private userService: UserService) {
    this.userService.getCurrentUser().subscribe(data => {
      this.isConnected = true
      this.role = data.role
      console.log(data)
    }, err =>  {
      console.log(err)
    })
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
