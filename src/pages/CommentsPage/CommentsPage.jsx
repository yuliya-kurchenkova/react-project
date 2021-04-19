import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import postsApi from '../../api/postsApi/api'
import {getComments} from "../../redux/actions/actions";
import classes from './CommentsPage.module.scss'


const CommentsPage = () => {

    const dispatch = useDispatch();
    const commentItems = useSelector(state => state.comments.commentItems)
    // console.log(commentItems.length)
    const [isLoading, setIsLoading] = useState(false);

    const getListComments = async () => {
        try {
            setIsLoading(true);
            const { data } = await postsApi.getCommentsList()
            dispatch(getComments(data))
            setIsLoading(false);
            // const totalComments = data.length
            // console.log(totalComments)
        } catch (err) {
            console.error(err);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getListComments()
    }, []);

    return (
        <div className={classes.commentsPage}>
            {
                isLoading ?
                    <div>Loading ...</div>
                    : null
            }
            {
                commentItems.map((item) => {
                    return (
                        <div
                        key={item.id}
                        className={classes['commentsPage__box']}
                        >
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    {item.email}
                                </div>
                                <div>
                                    {item.body}
                                </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CommentsPage;