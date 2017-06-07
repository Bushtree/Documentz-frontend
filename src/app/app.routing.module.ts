import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddItemComponent} from "./components/add-item/add-item.component";
import {ListItemsComponent} from "./components/list-items/list-items.component";
import {AddAttachmentComponent} from "./components/add-attachment/add-attachment.component";

const appRoutes: Routes = [
  {path: 'new-item', component: AddItemComponent},
  {path: 'list-items', component: ListItemsComponent},
  {path: 'new-attachment', component: AddAttachmentComponent},
  {path: '', redirectTo: '/list-items', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
