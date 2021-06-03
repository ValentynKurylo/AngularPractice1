import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../interfaces/Comment";
import {Post} from "../interfaces/PostInterface";
import {PostComponent} from "../Posts/post/post.component";
import {PostsComponent} from "../Posts/posts/posts.component";




@Injectable({
  providedIn: 'root'
})

export class CommentsService {

 //private posts: PostsComponent
 //private post: Post

  private url = 'https://jsonplaceholder.typicode.com/posts/'
 // private url = 'https://jsonplaceholder.typicode.com/comments/'
  constructor(private httpClint: HttpClient) { }
  getComments(postId: number): Observable<Comment[]>{
    console.log(postId);
    return this.httpClint.get<Comment[]>(this.url  + 9 + '/comments')
  }
}
