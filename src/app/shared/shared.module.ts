import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  MdButtonModule, MdCardModule, MdFormFieldModule, MdInputModule, MdTabsModule,
  MdToolbarModule
} from '@angular/material';

const material = [
  MdButtonModule,
  MdCardModule,
  MdFormFieldModule,
  MdInputModule,
  MdTabsModule,
  MdToolbarModule
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild()
  ],
  declarations: [],
  exports: [
    TranslateModule,
    ...material
  ]
})
export class SharedModule { }
