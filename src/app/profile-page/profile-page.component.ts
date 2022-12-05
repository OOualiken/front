import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from "rxjs";

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Information personnel ', content: 'Content 1'},
          {label: 'Historique des RDV ', content: 'historique '},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }

  ngOnInit(): void {
  }
}
