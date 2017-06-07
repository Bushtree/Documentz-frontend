import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CreateStoredItemAction } from "../../state/stored-item";
import { AppState } from "../../state";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: this.fb.control("", Validators.required),
      description: this.fb.control('')
    });
  }

  submit(){
    if (this.formGroup.invalid) {
      return;
    }
    console.log("Submit form", this.formGroup.value);
    this.store.dispatch(new CreateStoredItemAction(this.formGroup.value));
  }

  reset() {
    this.formGroup.reset();
  }
}
