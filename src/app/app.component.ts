import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { State } from "./store/reducers";
import { address_ } from "./store/reducers/profile.reducer";
import { PostalAddress } from "./models/postal-address";
import { AddressActions } from "./store/actions";
import { map } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  address$ = this.store.pipe(select(address_));

  constructor(private store: Store<State>) {}

  ngOnInit(): void {}

  onSave(address: Partial<PostalAddress>): void {
    this.store.dispatch(AddressActions.save({ address }));
  }

  onLoadAddress(): void {
    this.store.dispatch(AddressActions.load());
  }
}
