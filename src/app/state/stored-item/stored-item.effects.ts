import { Actions, Effect, toPayload } from "@ngrx/effects";
import { STORED_ITEM_ACTIONS } from "./";
import { StoredItemsApiService } from "./stored-items-api.service";
import { ListStoredItemsAction, SetStoredItemsAction } from "./stored-item.actions";
import { Injectable } from "@angular/core";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/switchMapTo";
import { Observable } from "rxjs/Observable";
import { go } from "@ngrx/router-store";

@Injectable()
export class StoredItemEffects {
  @Effect() create$ = this.actions$.ofType(STORED_ITEM_ACTIONS.create)
    .map(toPayload)
    .switchMap(item => this.apiService.addStoredItem(item))
    .switchMapTo(Observable.from([new ListStoredItemsAction(), go('/list-items')]));

  @Effect() getList$ = this.actions$.ofType(STORED_ITEM_ACTIONS.list)
    .switchMap(() => this.apiService.list())
    .map(result => new SetStoredItemsAction(result));

  constructor(private actions$: Actions, private apiService: StoredItemsApiService) {}
}
