import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { HomeComponent } from './home.component';
import { NewItemComponent } from './new-item/new-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'items',
        children: [
          {
            path: 'add',
            component: NewItemComponent
          },
          {
            path: '',
            component: ItemsListComponent
          }
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'items'
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
