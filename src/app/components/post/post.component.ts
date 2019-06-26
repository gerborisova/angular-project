import { Component, OnInit, Input } from "@angular/core";
import { PostsService } from "src/app/services/posts.service";
import { Posts } from "src/app/modules/Posts";
import { Router } from "@angular/router";
@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() post: Posts;

  constructor(private postService: PostsService, private router: Router) {}

  ngOnInit() {}

  setClasses() {
    let classes = {
      post: true
    };
    return classes;
  }

  onClick(post) {
    this.postService.clickCompleted(post).subscribe(post => console.log(post));
    this.router.navigateByUrl(`/details/${post.id}`);
    // console.log(post);
  }
}
