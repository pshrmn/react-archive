import * as types from "../constants/ActionTypes";
import { StoreRecipes } from "../helpers";

/*
 * StorageAPI responds to storage related actions, updating the localStorage.
 * This will update the localStorage any time one of the relevant actions is
 * dispatched. The action is allowed to reach the store and then the saving
 * is done afterwards so that the new state of the store is used.
 */
export const StorageAPI = store => next => action => {
  switch ( action.type ) {
  case types.SET_NAME:
  case types.SET_INGREDIENTS:
  case types.SET_INSTRUCTIONS:
  case types.DELETE_RECIPE:
    // let the action reach the reducer
    const resp = next(action);
    // now get the updated state
    var { recipes } = store.getState();
    StoreRecipes(recipes.filter(r => r !== null));
    return resp;
    break;
  default:
    return next(action);
  }
}
