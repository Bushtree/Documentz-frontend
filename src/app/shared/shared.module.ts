import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  MdButtonModule, MdCardModule, MdFormFieldModule, MdIconModule, MdInputModule, MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from './services/auth.service';

const material = [
  MdButtonModule,
  MdCardModule,
  MdFormFieldModule,
  MdIconModule,
  MdInputModule,
  MdTabsModule,
  MdToolbarModule
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule.forChild()
  ],
  declarations: [],
  providers: [
    AuthService
  ],
  exports: [
    TranslateModule,
    FlexLayoutModule,
    ...material
  ]
})
export class SharedModule { }
