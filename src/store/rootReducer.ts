import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/store/authSlice";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
