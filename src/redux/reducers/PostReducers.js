import { ADD_NEW_POST, GET_POSTS, DELETE_POST, CHANGE_POST } from '../../constants/types';

const initialState = {
    postItems: [],
};

export const postReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                postItems: [
                    ...state.postItems,
                    action.payload
                ]
            }
        case GET_POSTS:
            console.log(action.payload)
            return {
                postItems: action.payload
            }
        case DELETE_POST:

            return {
                postItems: action.payload
            }
        case CHANGE_POST:
            console.log(action.payload)
            return {
                postItems: action.payload
            }
    }
    return state;
}