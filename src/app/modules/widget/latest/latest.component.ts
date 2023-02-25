import { Component, OnInit } from '@angular/core';
import { Media } from '../../../interfaces/media';
import { Observable } from 'rxjs';
import { MediaService } from '../../../services/media.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  $list:Observable<Media[]>
  constructor(private mediaService:MediaService) {
    this.$list = new Observable()
  }

  ngOnInit(): void {
    this.$list  = this.mediaService.getLatestMedia()
  }

}
