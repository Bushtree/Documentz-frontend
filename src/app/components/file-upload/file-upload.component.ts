import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload: HTMLInputElement;
  @Input() multiple = false;
  @Input() accept = "*.*";
  @Output() files = new EventEmitter<File[]>();

  constructor() { }

  ngOnInit() {
  }

}
