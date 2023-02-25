import { Injectable } from '@angular/core';
import { Media } from '../interfaces/media';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }
  getFeaturedMedia() : Observable<Media[]>{
    return new Observable<Media[]>(observer=>{
      setTimeout(()=>{
          observer.next(this.getDummyMedia())
      },1000)
    })
  }
  getLatestMedia() : Observable<Media[]>{
    return new Observable<Media[]>(observer=>{
      setTimeout(()=>{
          observer.next(this.getDummyMedia())
      },1000)
    })
  }
  getMediaByCategory() {

  }
  getMediaByTag() {

  }
  getMediaByAuthor() {

  }
  private getDummyMedia():Media[]{
    return [
      {
        id:'1',
        name:'Media 1',
        tags:['tag1','tag2'],
        title:'The Shawshank Redemption',
        description:'Two imprisoned',
        image:{
          id:'1',
          alt:'The Shawshank Redemption',
          url:'https://m.media-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        thumbnail:{
          id:'1',
          alt:'The Shawshank Redemption',
          url:'https://m.media-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        source:[
          {
            url:'https://www.youtube.com/watch?v=6hB3S9bIaco',
            type:'video/youtube'
          }
        ],
        userID:'1',
        userName:'admin',
        createdOn:'2020-01-01',
        updatedOn:'2020-01-01',
        played:0,
        flag:'',
        flaggedBy:'',
        duration:0
      },
      {
        id:'2',
        name:'Media 2',
        tags:['tag1','tag2'],
        title:'The Godfather',
        description:'The aging patriarch',
        image:{
          id:'2',
          alt:'The Godfather',
          url:'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        thumbnail:{
          id:'2',
          alt:'The Godfather',
          url:'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        source:[
          {
            url:'https://www.youtube.com/watch?v=sY1S34973zA',
            type:'video/youtube'
          }
        ],
        userID:'1',
        userName:'admin',
        createdOn:'2020-01-01',
        updatedOn:'2020-01-01',
        played:0,
        flag:'',
        flaggedBy:'',
        duration:0
      },
    ]
  }
}
