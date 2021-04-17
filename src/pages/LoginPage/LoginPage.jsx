import React, { useState } from 'react'
import classes from './LoginPages.module.scss'
import InputTemplate from "../../component/Input/InputTemplate";
import Button from "../../component/Button/ButtonTemplate";
import { useHistory } from "react-router"

const LoginPage = () => {

    const [inputPassword, setInputPassword] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const handlerPassword = e => {
        setInputPassword(e.target.value)
    }

    const handlerEmail = e => {
        setInputEmail(e.target.value)
    }

    const disabledSignIn = !(inputPassword && inputEmail)

    const history = useHistory()

    function signIp() {
        const user = {
            password: inputPassword,
            email: inputEmail
        }
        if(user) {
            history.push("/posts")
        } else {

            return false
        }
        console.log(user)
        localStorage.setItem('token', true)
    }

    return (
        <div className={classes.loginPage}>
            <h1 className={classes['loginPage__title']}>Bход в личный кабинет</h1>
            <InputTemplate
               label={'Электронная почта'}
               type={'email'}
               value={inputEmail}
               onChange={handlerEmail}
            />
            <InputTemplate
                label={'Пароль'}
                type={'password'}
                value={inputPassword}
                onChange={handlerPassword}
            />
            <Button
            text={'Войти'}
            disabled={disabledSignIn}
            onClick={signIp}
            />
        </div>
    )
}
export default LoginPage;