import { Component, OnInit } from "@angular/core";

import { PostsService } from "src/app/services/posts.service";
import { Posts } from "src/app/modules/Posts";
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  posts: Posts[];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
