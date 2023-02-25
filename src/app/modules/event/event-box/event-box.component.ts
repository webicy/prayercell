import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../../interfaces/event';

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss']
})
export class EventBoxComponent implements OnInit {
  @Input() event?:Event
  constructor() {

  }

  ngOnInit(): void {
  }
}
