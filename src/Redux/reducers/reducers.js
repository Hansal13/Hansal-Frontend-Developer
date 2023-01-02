import { combineReducers } from "redux";
import { capsuleReducers } from "./storeReducers";

const reducer = combineReducers({
  allCapsules: capsuleReducers,
});

export default reducer;
