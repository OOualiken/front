import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user-service/user.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isConnected: boolean = false
  role: string = ""


  constructor(private userService: UserService) {
    this.userService.getCurrentUser().subscribe(data => {
      this.isConnected = true
      this.role = data.role
    }, err =>  {

    })
  }

  ngOnInit(): void {
  }

}
