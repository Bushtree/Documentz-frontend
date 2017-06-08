import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AddAttachmentComponent } from './components/add-attachment/add-attachment.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { AppRoutingModule } from "./app.routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponent } from './components/nav/nav.component';
import { RouterStoreModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import * as state from "./state";
import { SharedModule } from "./shared/shared.module";
import { effects } from "./state";
import { StoredItemsApiService } from "./state/stored-item/stored-items-api.service";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AttachmentApiService } from "./components/add-attachment/attachment-api.service";

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    AddAttachmentComponent,
    ListItemsComponent,
    NavComponent,
    FileUploadComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.provideStore(state.reducer),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    RouterStoreModule.connectRouter(),
    ...effects,
    AppRoutingModule
  ],
  providers: [
    AttachmentApiService,
    StoredItemsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
