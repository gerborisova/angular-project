import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Posts } from "../modules/Posts";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class PostsService {
  postsUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}
  //Get posts
  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.postsUrl);
  }
  //Clicked

  clickCompleted(post: Posts): Observable<any> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.put(url, post, httpOptions);
  }
}
