import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  sideBarOpen = true;

  public totalItem : number = 0;
  public searchTerm !: string;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    //this.cartService.search.next(this.searchTerm);
  }
}
