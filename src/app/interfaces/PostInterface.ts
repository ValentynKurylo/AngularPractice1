import {Comment} from "./Comment";

export interface Post{
  id: number
  title: string
  body: string
  comment: {
    body: string
    postId : number
    id: number
  }
}
