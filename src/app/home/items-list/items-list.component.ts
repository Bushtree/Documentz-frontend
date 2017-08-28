import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StoredItem } from './stored-item';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { getStoredItems } from '../../state/stored-items';
import { ItemsListService } from './items-list.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  storedItems$: Observable<StoredItem[]>;

  constructor(private store: Store<AppState>, private itemsListService: ItemsListService) { }

  ngOnInit() {
    this.storedItems$ = this.store.select(getStoredItems);
    this.itemsListService.list();
  }
}
