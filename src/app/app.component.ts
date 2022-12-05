import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vetservice';
  isConnected: boolean = false

  ngOnInit(){

  }

  connection(){
    this.isConnected = !this.isConnected;
  }
}