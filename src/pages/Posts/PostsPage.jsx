import React, {  useEffect } from 'react'
import postsApi from '../../api/postsApi/api'
import Button from "../../component/Button/ButtonTemplate";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, deletePost } from "../../redux/actions/actions";

const PostsPage = () => {

    const dispatch = useDispatch();

    const postItems = useSelector(state => state.posts.postItems)

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
    const changePost = () => {
        console.log('change Post')
    }


    return (
        <div>
            {
                postItems.map((item, i) => {
                    return (
                        <div
                key={i}
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
                                onClick={changePost}
                            />

                </div>
                )
            })
            }

        </div>
    )
}
export default PostsPage;