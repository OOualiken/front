import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ProgressBarMode} from "@angular/material/progress-bar";

@Component({
  selector: 'app-vet-page',
  templateUrl: './vet-page.component.html',
  styleUrls: ['./vet-page.component.css']
})
export class VetPageComponent implements OnInit {
  title = 'admin-panel-layout';
  sideBarOpen = true;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
