import {Component, OnInit} from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";


@Component({
  selector: 'app-schaduler',
  templateUrl: './schaduler.component.html',
  styleUrls: ['./schaduler.component.css']

})
export class SchadulerComponent implements OnInit {
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  ngOnInit(): void {
  }

}
