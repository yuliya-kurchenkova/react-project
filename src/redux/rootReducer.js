import { combineReducers } from "redux";
import { postReducers } from "./reducers/PostReducers";
import { commentReducers } from "./reducers/CommentReducers";

export const rootReducer = combineReducers({
    posts: postReducers,
    comments: commentReducers
})