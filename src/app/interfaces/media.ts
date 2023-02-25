export interface Media {
  id: string
  name: string
  title: string
  tags: string[],
  description: string
  image: {
    id: string
    alt: string
    url: string
  }
  thumbnail:{
    id:string
    alt:string
    url:string
  }
  source: { url: string, type: string }[]
  userID: string,
  userName: string
  createdOn: string
  updatedOn: string
  played: number,
  flag: string
  flaggedBy: string
  duration: number
}

export interface MediaControl {
  play: () => any
  pause: () => any
}
