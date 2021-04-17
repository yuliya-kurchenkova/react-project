import React, {useState} from 'react'
import InputTemplate from "../../component/Input/InputTemplate";
import Button from "../../component/Button/ButtonTemplate";
import {addNewPost, getPosts} from "../../redux/actions/actions";
import {  useSelector, useDispatch } from "react-redux";
import postsApi from "../../api/postsApi/api";
import { useHistory } from "react-router"



const CreatePost = () => {
    const dispatch = useDispatch();

    const history = useHistory()

    const postItems = useSelector(state => state.posts.postItems)

    const [inputBody, setInputBody] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    const [inputUserId, setInputUserId] = useState("");

    const handlerBody = e => {
        setInputBody(e.target.value)
    }

    const handlerTitle = e => {
        setInputTitle(e.target.value)
    }

    const handlerUserId = e => {
        setInputUserId(e.target.value)
    }

    const disabledCreate = !(inputBody && inputTitle && inputUserId)

    const createPost = async () => {
        console.log('createPost')
            try {
                const user = {
                    body: inputBody,
                    title: inputTitle,
                    userId: inputUserId
                }
                const { data } = await postsApi.createPost()
                console.log(data)
                user.id = data.id
                console.log(postItems)
                // const arr = postItems.push(user)
                // console.log(arr)
                dispatch(addNewPost(user));
                // dispatch(getPosts(arr));
                history.push("/posts")
            } catch (err) {
                console.error(err);
            }
    }

    return (
        <div>
           <InputTemplate
               label={'text'}
               type={'text'}
               value={inputTitle}
               onChange={handlerTitle}
           />
            <InputTemplate
                label={'text'}
                type={'text'}
                value={inputBody}
                onChange={handlerBody}
            />
            <InputTemplate
                label={'text'}
                type={'text'}
                value={inputUserId}
                onChange={handlerUserId}
            />
            <Button
                text={'Cоздать'}
                disabled={disabledCreate}
                onClick={createPost}
            />
        </div>
    )
}
export default CreatePost;