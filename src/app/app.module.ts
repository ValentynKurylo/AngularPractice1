import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './Posts/posts/posts.component';
import { PostComponent } from './Posts/post/post.component';
import {HttpClientModule} from "@angular/common/http";
import { CommentsComponent } from './Comments/comments/comments.component';
import { CommentComponent } from './Comments/comment/comment.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'posts', component: PostsComponent},
      {path: ':id', component: CommentsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
