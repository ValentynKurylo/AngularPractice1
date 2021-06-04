import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from "../../services/commebts.service";
import {Comment} from "../../interfaces/Comment";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {PostsComponent} from "../../Posts/posts/posts.component";
import {PostComponent} from "../../Posts/post/post.component";
import {Post} from "../../interfaces/PostInterface";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  /*constructor(private commentService: PostService,private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(params=>{
      this.commentService.getComment(params.id).subscribe(value => {this.comments = value})
    })
  }*/

  @Input()
  postId: number
  comments: Comment[]


  constructor(private commentService: CommentsService) {
  }

  ngOnInit(): void {
    console.log(this.postId);
    this.commentService.getComments(this.postId).subscribe(value=>{this.comments = value})
  }

}
