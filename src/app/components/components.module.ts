import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from "@angular/material";
import { AddressFormComponent } from "./address-form.component";
import { DemoMaterialModule } from "../material.module";

@NgModule({
  declarations: [AddressFormComponent],
  imports: [CommonModule, ReactiveFormsModule, DemoMaterialModule],
  exports: [AddressFormComponent]
})
export class ComponentsModule {}
