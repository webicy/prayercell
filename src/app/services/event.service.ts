import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
  //get observable of list of events

  getList():Observable<Event[]>{

    return new Observable<Event[]>(observer=>{
      setTimeout(()=>{
        observer.next(this.list())
      },1000)
    })
  }
  getFeaturedList():Observable<Event[]>{
    return new Observable<Event[]>(observer=>{
      setTimeout(()=>{
        observer.next(this.list())
      },1000)
    })
  }

  private list():Event[]{
    return [
      {
        id:'1',
        name:'Event 1',
        tags:['tag1','tag2'],
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
        userID:'1',
        createdOn:'2020-01-01',
        updatedOn:'2020-01-01',
        startDate:'2020-01-01 : 12:00',
        endDate:'2020-01-01 : 13:00',
        language:'English',
        location:'Sydney',
        url:'https://www.youtube.com/watch?v=6hB3S9bIaco',
        organizer:{
          name:'admin',
          alternateName:'',
          url:''
        }
      },
      {
        id:'2',
        name:'Event 2',
        tags:['tag1','tag2'],
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
        userID:'1',
        createdOn:'2020-01-01',
        updatedOn:'2020-01-01',
        startDate:'2020-01-01 : 12:00',
        endDate:'2020-01-01 : 13:00',
        language:'English',
        location:'Sydney',
        url:'https://www.youtube.com/watch?v=6hB3S9bIaco',
        organizer:{
          name:'admin',
          alternateName:'',
          url:''
        }
      }
    ]
  }
}
