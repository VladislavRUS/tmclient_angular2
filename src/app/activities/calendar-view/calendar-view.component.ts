import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  checked: boolean = true;
  value: Date;
  events: any[];

  constructor() { }

  ngOnInit() {
    this.events = [
      {
        "title": "Поздравить с днем рождения!",
        "start": "2017-02-28"
      }
    ]
  }

}
