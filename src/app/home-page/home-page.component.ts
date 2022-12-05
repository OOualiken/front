import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isConnected: boolean = false

  connection(){
    this.isConnected = !this.isConnected;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
