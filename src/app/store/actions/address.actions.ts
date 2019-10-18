import { createAction, props } from "@ngrx/store";
import { PostalAddress } from "../../models/postal-address";

export const load = createAction("[Address] Load");

export const loadSuccess = createAction(
  "[Address] Load Success",
  props<{ address: PostalAddress }>()
);

export const update = createAction(
  "[Address] Update",
  props<{ address: Partial<PostalAddress> }>()
);

export const save = createAction(
  "[Address] Save",
  props<{ address: Partial<PostalAddress> }>()
);
