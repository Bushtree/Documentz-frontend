import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { HomeComponent } from './home.component';
import { ItemsApiService } from './items-list/items-api.service';
import { ItemsListService } from './items-list/items-list.service';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { NewItemComponent } from './new-item/new-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MdFormFieldModule, MdInputModule, MdMenuModule, MdTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MdTabsModule,
    MdInputModule,
    MdFormFieldModule,
    SharedModule
  ],
  providers: [
    ItemsApiService,
    ItemsListService
  ],
  declarations: [ItemsListComponent, HomeComponent, HeaderComponent, NewItemComponent]
})
export class HomeModule {
}
