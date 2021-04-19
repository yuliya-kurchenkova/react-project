import { ADD_NEW_POST, GET_POSTS, DELETE_POST, CHANGE_POST, GET_COMMENTS, SORT_POSTS } from '../../constants/types'
import postsApi from "../../api/postsApi/api";



export function addNewPost(item) {
    return {
        type: ADD_NEW_POST,
        payload: item
    }
}
export function getPosts(list) {
    console.log(list)
    return {
        type: GET_POSTS,
        payload: list
    }
}
export function deletePost(list, id) {
    return async dispatch => {
        await postsApi.deletePosts(id)
        console.log(list)
        console.log(id)

        dispatch({
            type: DELETE_POST,
            payload: list
        })
    }
}
export function changePost(list, id, post) {

    return async dispatch => {
        await postsApi.updatePost(id, post)
        const indexPost = list.findIndex((item) => item.id === id)
        console.log(list)
        list.splice(indexPost, 1, post)
        console.log(list)

        dispatch({
        type: CHANGE_POST,
        payload: list
        })
    }
}
export function getComments(list) {
    console.log(list)
    return {
        type: GET_COMMENTS,
        payload: list
    }
}

export function sortPosts(list) {
    console.log(list)
    return  dispatch => {
        const arr = list.sort( (a, b) => {

        if (a.title < b.title) {
            return -1
        }
    })
    console.log(arr)
        dispatch ({
        type: SORT_POSTS,
        payload: list.sort( (a, b) => {

            if (a.title < b.title) {
                return -1
            }
        })
        })
    }
}