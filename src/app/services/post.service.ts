import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../interfaces/PostInterface";
import {Comment} from "../interfaces/Comment";

@Injectable({
  providedIn: 'root'
})
export class PostService {
   private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClint: HttpClient) { }
  getPost(): Observable<Post[]>{
    return this.httpClint.get<Post[]>(this.url)
  }
  /*getComment(id:number):Observable<Comment[]>{
    return this.httpClint.get<Comment[]>(this.url+'/'+id+'/comments')
  }*/
}
