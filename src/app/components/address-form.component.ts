import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from "@angular/core";
import { FormControl, FormArray } from "@angular/forms";
import { PostalAddress } from "../models/postal-address";
import { Subject } from "rxjs";
import { takeUntil, debounceTime, skip } from "rxjs/operators";
import { FormGroupOf } from "../utils/form-group-of";

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressFormComponent implements OnChanges {
  form = new FormGroupOf<PostalAddress>({
    address: new FormArray([new FormControl()]),
    city: new FormControl(),
    country: new FormControl(),
    postalCode: new FormControl(),
    state: new FormControl()
  });

  @Input() address: PostalAddress;
  @Output() save = new EventEmitter<Partial<PostalAddress>>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['address'] && changes['address'].currentValue) {
      this.form.patchValue(this.address, { emitEvent: false });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.form.markAsPristine();
    }
  }
}
