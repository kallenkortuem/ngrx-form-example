import { PostalAddress } from "../../models/postal-address";
import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from "@ngrx/store";
import { AddressActions } from "../actions";
import { HttpErrorResponse } from "@angular/common/http";

export const profileFeatureKey = "profile";

export interface State {
  loading: boolean;
  address: PostalAddress;
  error: HttpErrorResponse;
}

export const initialState: State = {
  loading: false,
  address: null,
  error: null
};

const ngrxFormReducer = createReducer(
  initialState,
  on(AddressActions.load, AddressActions.save, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(
    AddressActions.loadSuccess,
    AddressActions.saveSuccess,
    (state, action) => {
      const address = { ...state.address, ...action.address };
      return { ...state, loading: false, error: null, address };
    }
  ),
  on(AddressActions.saveError, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return ngrxFormReducer(state, action);
}

export const profileState_ = createFeatureSelector<State>(profileFeatureKey);

export const address_ = createSelector(
  profileState_,
  state => state && state.address
);

export const loading_ = createSelector(
  profileState_,
  state => state && state.loading
);

export const error_ = createSelector(
  profileState_,
  state => state && state.error
);
