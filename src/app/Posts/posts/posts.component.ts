import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces/PostInterface";
import {PostService} from "../../services/post.service";
import {Comment} from "../../interfaces/Comment";
import {CommentsService} from "../../services/commebts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[]
  comments: Comment[]
  @Input()
  post: Post
  constructor(private PostService: PostService, private commentService: CommentsService) { }

  ngOnInit(): void {
     this.PostService.getPost().subscribe(value => {this.posts = value})
     this.commentService.getComments(this.post.id).subscribe(value=>{this.comments = value})
  }


}
