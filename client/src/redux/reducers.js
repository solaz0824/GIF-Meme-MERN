import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import itemReducer from "./item/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  item: itemReducer,
});

export default rootReducer;
