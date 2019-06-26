import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostComponent } from "./components/post/post.component";

// import { PostItemComponent } from './components/post-item/post-item.component';
// import { IndexComponent } from './components/Posts/index/index.component';

@NgModule({
  declarations: [AppComponent, routingComponents, PostComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
