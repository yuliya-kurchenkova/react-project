import React, {  useEffect, useState } from 'react'
import postsApi from '../../api/postsApi/api'
import Button from "../../component/Button/ButtonTemplate";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, deletePost, changePost } from "../../redux/actions/actions";
import ModalTemplate from "../../component/Modal/ModalTemplate";

const PostsPage = () => {

    const dispatch = useDispatch();

    const postItems = useSelector(state => state.posts.postItems)

    const [isVisibleModal, setIsVisibleModal] = useState(false)

    const [modalNumber, setModalNumber] = useState(-1)



    const toggleModal = (id) => {
        setIsVisibleModal(!isVisibleModal);
        setModalNumber(id)
    }

    const getListPosts = async () => {
        try {
            const { data } = await postsApi.getPostsList()
            dispatch(getPosts(data));
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getListPosts()
    }, []);

    const deletePostId = async (id) => {
        const arr = postItems.filter((item) => item.id !== id )
        dispatch(deletePost(arr, id));

    }
    // const changePostId = () => {
    //     toggleModal()
    // }


    return (
        <div>
            {
                postItems.map((item) => {
                    return (
                        <div
                key={item.id}
                >
                            <div>
                                {item.title}
                            </div>
                            <div>
                                {item.body}
                            </div>

                            <Button
                                text={'Удалить'}
                                onClick={() => deletePostId(item.id)}
                            />
                            <Button
                                text={'Изменить'}
                                onClick={() => toggleModal(item.id)}
                            />
                            {
                                modalNumber === item.id ?
                                <ModalTemplate
                                    item={item}
                                    toggleModal={toggleModal}
                                />
                                : null
                            }

                </div>
                )
            })
            }

        </div>
    )
}
export default PostsPage;