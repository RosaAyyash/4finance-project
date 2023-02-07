import { combineReducers } from "redux";
import MessageReducer from "./messageReducer";
export default combineReducers({
  MessageReducer,
});

export type rootReducer = ReturnType<typeof combineReducers>;
