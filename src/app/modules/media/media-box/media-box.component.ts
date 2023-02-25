import { Component, Input, OnInit } from '@angular/core';
import { Media } from '../../../interfaces/media';

@Component({
  selector: 'app-media-box',
  templateUrl: './media-box.component.html',
  styleUrls: ['./media-box.component.scss']
})
export class MediaBoxComponent implements OnInit {
  @Input() media?: Media
  constructor() { }

  ngOnInit(): void {
  }

}
