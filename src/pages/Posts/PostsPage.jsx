import React, {  useEffect, useState } from 'react'
import postsApi from '../../api/postsApi/api'
import Button from "../../component/Button/ButtonTemplate";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, deletePost, sortPosts } from "../../redux/actions/actions";
import ModalTemplate from "../../component/Modal/ModalTemplate";
import ModalCreatePost from "../../component/ModalCreatePost/ModalCreatePost";
import classes from './PostsPage.module.scss'
import { useHistory } from "react-router"

const PostsPage = () => {

    const dispatch = useDispatch();
    const postItems = useSelector(state => state.posts.postItems)
    const commentItems = useSelector(state => state.comments.commentItems)
    const history = useHistory()

    const [isVisibleModal, setIsVisibleModal] = useState(false)
    const [modalNumber, setModalNumber] = useState(-1)
    const [isModalCreate, setIsModalCreate] = useState(false)

    const [isLoading, setIsLoading] = useState(false);


    const toggleModal = (id) => {
        setIsVisibleModal(!isVisibleModal);
        setModalNumber(id)
    }

    const toggleModalCreate = () => {
        setIsModalCreate(!isModalCreate);

    }

    const getListPosts = async () => {
        try {
            setIsLoading(true);
            const { data } = await postsApi.getPostsList()
            dispatch(getPosts(data));
            setIsLoading(false);
        } catch (err) {
            console.error(err);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getListPosts()
    }, []);

    const sortTitle = () => {

        dispatch(sortPosts(postItems));
        console.log(postItems)
    }


    const deletePostId = async (id) => {
        const arr = postItems.filter((item) => item.id !== id )
        dispatch(deletePost(arr, id));

    }

    const goToComments = () => {
        history.push("/comments")
    }

    return (
        <div className={classes.postsPage}>

            {
                isLoading ?
                <div>Loading ...</div>
             : null
            }
            <Button
                text={'Создать пост'}
                onClick={toggleModalCreate}
            />
            <Button
                text={'go to comments'}
                onClick={goToComments}
            />
            <Button
                text={'Сортировка'}
                onClick={sortTitle}
            />
            <p>Total comments:{commentItems.length}</p>
            {
                isModalCreate ?
                    <ModalCreatePost
                        toggleModal={toggleModalCreate}
                    />
                    : null
            }
            {
                postItems.map((item) => {
                    return (
                        <div
                key={item.id}
                className={classes['postsPage__box']}
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