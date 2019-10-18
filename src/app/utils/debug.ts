import { ActionReducer } from "@ngrx/store";

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action): ActionReducer<any> {
    const isGroupSupported = typeof console.groupCollapsed === "function";
    const result = reducer(state, action);
    console.log(action.type);
    console.log("begin state:", state);
    console.log("action:", action);
    console.log("end state:", result);
    console.log("\n");
    return result;
  };
}
