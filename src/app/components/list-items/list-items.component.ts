import { Component, OnInit } from '@angular/core';
import { AppState } from "../../state";
import { Store } from "@ngrx/store";
import { getStoredItems, ListStoredItemsAction, StoredItem } from "../../state/stored-item";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  storedItems$: Observable<StoredItem[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new ListStoredItemsAction());
    this.storedItems$ = this.store.select("storedItems");
  }

}
