import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { catchError, concatMap, map, switchMap, delay } from "rxjs/operators";
import { AddressActions } from "../actions";

@Injectable()
export class AddressEffects {
  loadAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddressActions.load),
      switchMap(() =>
        of({
          address: ["1st Avenue"],
          city: "Minneapolis",
          state: "MN",
          postalCode: "55345",
          country: "USA"
        }).pipe(
          delay(300),
          map(address => AddressActions.loadSuccess({ address }))
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
