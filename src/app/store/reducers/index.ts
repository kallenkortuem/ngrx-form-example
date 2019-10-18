import * as fromProfile from "./profile.reducer";
import {
  getSelectors,
  routerReducer,
  RouterReducerState
} from "@ngrx/router-store";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

export interface State {
  profile: fromProfile.State;
}

export const reducers: ActionReducerMap<State> = {
  profile: fromProfile.reducer
};
