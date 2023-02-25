import { Component, OnInit } from '@angular/core';
import { Media } from '../../../interfaces/media';
import { FeaturedService } from '../../../services/featured.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  mediaList: Media[] = []
  $list:Observable<Media[]>
  loading:boolean = false
  constructor(private featuredService:FeaturedService) {
    this.$list  = new Observable()
  }

  ngOnInit(): void {
    this.loading =  true
    this.$list  = this.featuredService.getList()
    this.loadList()
  }
  private loadList(){
    this.featuredService.getList().subscribe(
      (data:Media[])=>{
        console.log('he ', data);
        this.mediaList = data
      }
    )
  }

}
