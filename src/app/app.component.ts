import { ChangeDetectionStrategy, Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { State } from "./store/reducers";
import { address_, error_, loading_ } from "./store/reducers/profile.reducer";
import { PostalAddress } from "./models/postal-address";
import { AddressActions } from "./store/actions";
import { HttpErrorResponse } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  address$ = this.store.pipe(select(address_));
  error$ = this.store.pipe(select(error_));
  loading$ = this.store.pipe(select(loading_));

  constructor(private store: Store<State>) {}

  onSave(address: Partial<PostalAddress>): void {
    this.store.dispatch(AddressActions.save({ address }));
  }

  onLoadAddress(): void {
    this.store.dispatch(AddressActions.load());
  }

  // for demo purposes only
  fakeSaveWithErrors(): void {
    this.store.dispatch(
      AddressActions.saveError({ error: {
        statusText: 'Fake Internal Server Error Message'
      } as HttpErrorResponse })
    );
  }
}
