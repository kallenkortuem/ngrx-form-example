import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, FormArray } from "@angular/forms";
import { PostalAddress } from "../models/postal-address";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {}
