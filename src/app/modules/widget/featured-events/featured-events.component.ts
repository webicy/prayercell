import { Component, OnInit } from '@angular/core';
import {Event} from '../../../interfaces/event';
import {Observable} from 'rxjs';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-featured-events',
  templateUrl: './featured-events.component.html',
  styleUrls: ['./featured-events.component.scss']
})
export class FeaturedEventsComponent implements OnInit {

  $eventList:Observable<Event[]>
  constructor( private eventService:EventService) {
    this.$eventList = new Observable()
  }

  ngOnInit(): void {
    this.$eventList  = this.eventService.getList()
  }

}
