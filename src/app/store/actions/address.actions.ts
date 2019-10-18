import { createAction, props } from "@ngrx/store";
import { HttpErrorResponse } from "@angular/common/http";
import { PostalAddress } from "../../models/postal-address";

export const load = createAction("[Address] Load");

export const loadSuccess = createAction(
  "[Address] Load Success",
  props<{ address: PostalAddress }>()
);

export const save = createAction(
  "[Address] Save",
  props<{ address: Partial<PostalAddress> }>()
);

export const saveSuccess = createAction(
  "[Address] Save Success",
  props<{ address: Partial<PostalAddress> }>()
);

export const saveError = createAction(
  "[Address] Save Error",
  props<{ error: HttpErrorResponse }>()
);
