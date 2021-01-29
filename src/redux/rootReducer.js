import { combineReducers } from "redux";
import matricsCounter from "./matricsCounterReducer";
import userReducer from "./usersReducer";
const rootReducer = combineReducers({
  matricReducer: matricsCounter,
  userRecord: userReducer,
});
export default rootReducer;
