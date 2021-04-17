import React, {useState, useEffect} from 'react';
import InputTemplate from "../Input/InputTemplate";
import Button from "../Button/ButtonTemplate";
import postsApi from "../../api/postsApi/api";
import {useDispatch, useSelector} from "react-redux";
import {changePost, getPosts} from "../../redux/actions/actions";


const ModalTemplate = (props) => {

    const dispatch = useDispatch();
    const postItems = useSelector(state => state.posts.postItems)

    const [inputTitle, setInputTitle] = useState('');
    const [inputBody, setInputBody] = useState('');

    useEffect(() => {
        setInputTitle(props.item.title)
        setInputBody(props.item.body)
    },[])

    const handlerTitle = e => {
        setInputTitle(e.target.value)
    }

    const handlerBody = e => {
        setInputBody(e.target.value)
    }

    const changeData = async () => {
        try {
            const post = {
                title: inputTitle,
                body: inputBody,
            }
            const { data } = await postsApi.updatePost(props.item.id, post)
            console.log(data)
            const indexPost = postItems.findIndex((item) => item.id === data.id)

            postItems.splice(indexPost, 1, data)
            dispatch(getPosts(postItems))
            dispatch(changePost(postItems, data.id, data));
            props.toggleModal()
        } catch (err) {
            console.error(err);
        }
        console.log('changeData')
    }


    const cancelData = () => {
        props.toggleModal()
    }
    return (
        <div className={'app-modal'}>
            <div className="app-modal__header">
                <Button
                    text={'Back'}
                    onClick={props.toggleModal}
                />
                <h2>Редактирование</h2>
            </div>
            <div className="app-modal__content">

                <InputTemplate
                    value={inputTitle}
                    onChange={handlerTitle}
                />
                <InputTemplate
                    value={inputBody}
                    onChange={handlerBody}
                />

            </div>
            <div className='app-modal__footer'>
                <Button
                    text={'Сохранить'}
                    onClick={changeData}
                />
                <Button
                    text={'Отменить'}
                    onClick={cancelData}
                />
            </div>
        </div>
    )
}

export default ModalTemplate;