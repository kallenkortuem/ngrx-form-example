import { PostalAddress } from "../../models/postal-address";
import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from "@ngrx/store";
import { AddressActions } from "../actions";

export const profileFeatureKey = "profile";

export interface State {
  loaded: boolean;
  address: PostalAddress;
}

export const initialState: State = {
  loaded: false,
  address: null
};

const ngrxFormReducer = createReducer(
  initialState,
  on(AddressActions.loadSuccess, (state, { address }) => ({
    ...state,
    address
  })),
  on(AddressActions.update, (state, { address }) => ({
    ...state,
    address: { ...state.address, ...address }
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
