import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Posts } from "../modules/Posts";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  postsUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.postsUrl);
  }
}
