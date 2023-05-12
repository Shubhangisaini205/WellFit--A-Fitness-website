import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as AuthReducer} from "./AuthReducer.ts/reducer"
import { reducer as workoutReducer } from "./workoutReducer/reducer";

const rootReducer=combineReducers({
   workoutReducer
  });
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))