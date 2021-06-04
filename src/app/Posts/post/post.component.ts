import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces/PostInterface";
import {Comment} from "../../interfaces/Comment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post

  @Input()
  comment: Comment


  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
 /* showComments():void{
    this.router.navigate([this.post.id], {relativeTo: this.activatedRouter})
  }*/
}
