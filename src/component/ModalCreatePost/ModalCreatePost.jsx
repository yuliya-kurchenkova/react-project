import React, {useState} from 'react';
import InputTemplate from "../../component/Input/InputTemplate";
import Button from "../../component/Button/ButtonTemplate";
import {addNewPost, getPosts} from "../../redux/actions/actions";
import {  useSelector, useDispatch } from "react-redux";
import postsApi from "../../api/postsApi/api";


const ModalCreatePost = (props) => {
        const dispatch = useDispatch();
        const postItems = useSelector(state => state.posts.postItems)

        const [inputBody, setInputBody] = useState("");
        const [inputTitle, setInputTitle] = useState("");

        const handlerBody = e => {
                setInputBody(e.target.value)
        }

        const handlerTitle = e => {
                setInputTitle(e.target.value)
        }


        const disabledCreate = !(inputBody && inputTitle)

        const createPost = async () => {

                try {
                        const post = {
                                body: inputBody,
                                title: inputTitle,
                                userId: 1
                        }
                        const { data } = await postsApi.createPost(post)
                        console.log(data)
                        post.id = data.id
                        console.log(postItems)
                        const arr = postItems.unshift(post)
                        console.log(arr)
                        dispatch(addNewPost(post));

                } catch (err) {
                        console.error(err);
                }
        }

        return (
                <div>
                        <InputTemplate
                                label={'title'}
                                type={'text'}
                                value={inputTitle}
                                onChange={handlerTitle}
                        />
                        <InputTemplate
                                label={'body'}
                                type={'text'}
                                value={inputBody}
                                onChange={handlerBody}
                        />

                        <Button
                                text={'Coздать'}
                                disabled={disabledCreate}
                                onClick={createPost}
                        />
                </div>
                )
}

export default ModalCreatePost;
