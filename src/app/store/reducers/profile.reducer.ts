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
  loading: boolean;
  address: PostalAddress;
}

export const initialState: State = {
  loading: false,
  address: null
};

const ngrxFormReducer = createReducer(
  initialState,
  on(AddressActions.load, AddressActions.save, state => ({
    ...state,
    loading: true
  })),
  on(
    AddressActions.loadSuccess,
    AddressActions.saveSuccess,
    (state, { address }) => ({
      ...state,
      address
    })
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
