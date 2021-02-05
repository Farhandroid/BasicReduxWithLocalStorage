import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

//Whitelist means which data we want to store in local storage
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
