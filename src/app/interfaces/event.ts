export interface Event{
  id: string
  name:string
  description:string
  language:string
  tags:string[]
  location:string
  startDate:string
  endDate:string
  url:string
  userID:string
  image:{
    id:string
    url:string
    alt:string
  }
  thumbnail:{
    id:string
    url:string
    alt:string
  }
  performer?:{
    name:string
    alternateName?:string
  },
  organizer:{
    name:string
    alternateName?:string
    url?:string
  }
  createdOn: string
  updatedOn: string
}
