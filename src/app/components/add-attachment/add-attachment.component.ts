import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil";
import { AttachmentApiService } from "./attachment-api.service";

@Component({
  selector: 'app-add-attachment',
  templateUrl: './add-attachment.component.html',
  styleUrls: ['./add-attachment.component.scss']
})
export class AddAttachmentComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  @ViewChild('fileInput') file;
  formGroup: FormGroup;
  get fileInput(): HTMLInputElement {
    return this.file.nativeElement;
  }

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private apiService: AttachmentApiService) { }

  ngOnInit() {
    this.activatedRoute.params.takeUntil(this.ngUnsubscribe).subscribe(params => {
      this.formGroup = this.fb.group({
        id: params['id']
      })
    });
  }

  submit() {
    const id = this.formGroup.value.id;
    const data = new FormData();
    data.append("documentId", id);
    for (let i = 0; i < this.fileInput.files.length; i++) {
      const file = this.fileInput.files.item(i);
      data.append("files", file, file.name);
    }
    this.apiService.upload(data).subscribe(success => {
      console.log("success", success);
    },
    error => {
      console.log("error", error);
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
