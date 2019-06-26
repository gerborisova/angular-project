import { Component, OnInit, Input } from "@angular/core";
import { Posts } from "src/app/modules/Posts";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  @Input() post: Posts;
  constructor() {}

  ngOnInit() {}
}
