import { combineReducers } from "redux";
import { postReducers } from "./reducers/PostReducers";

export const rootReducer = combineReducers({
    posts: postReducers,
})