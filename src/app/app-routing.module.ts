import { NgModule } from "@angular/core";
import { Routes, RouterModule, ActivatedRoute } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";
import { ViewComponent } from "./components/view/view.component";
import { EditComponent } from "../app/components/edit/edit.component";
import { PostComponent } from "../app/components/post/post.component";

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "details/:id", component: ViewComponent },
  { path: "edit/:id", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  IndexComponent,
  ViewComponent,
  EditComponent,
  PostComponent
];
