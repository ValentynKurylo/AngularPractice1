import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../interfaces/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
  constructor(private httpClint: HttpClient) { }
  getComments(): Observable<Comment[]>{
    return this.httpClint.get<Comment[]>(this.url)
  }
}
