import { GET_COMMENTS } from '../../constants/types';

const initialState = {
    commentItems: [],
};

export const commentReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            console.log(action.payload)
            return {
                commentItems: action.payload
            }
    }
    return state;
}