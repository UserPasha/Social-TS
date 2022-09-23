import React from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import c from './LoginPage.module.css'

import {loginTC} from "../../../Redux/auth-reducer";
import {connect, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/redux-store";
import { Navigate } from 'react-router-dom';

type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type MSTPType = {
    isAuth: boolean
}
type MDTPType = {
    login: (email: string, password: string, rememberMe: boolean)=> void
}
type LoginPropsType = MSTPType & MDTPType
const LoginPage = (props: LoginPropsType) => {
    const isAuth = useSelector<AppRootStateType, boolean>((state)=> state.auth.isAuth)

    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm<LoginDataType>({
        mode: "onBlur"
    });
    const onSubmit = (data: LoginDataType) => {
        props.login(data.email, data.password, data.rememberMe)
        reset()
    }
    if(isAuth){
        return <Navigate to="/profile" />
    }
    return (<>
            <h1>
                LOGIN
            </h1>
            <div className={c.formWrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={c.form}>
                <div className={c.inputWrapper}>
                <label>
                    Login:
                    <input className={c.input} {...register('email', {
                        required: 'Enter your name',
                        minLength: {
                            value: 3,
                            message: "Your name should be more than 3 symbols"
                        }
                    })}
                    />
                </label>
                    <i></i>
                </div>
                <div className={c.errorBlock}>
                    {errors?.email && <p>{errors?.email?.message || 'error'}</p>}
                </div>
                <div className={c.inputWrapper}>
                <label>
                    Password:
                    <input type={'password'} className={c.input} {...register('password', {
                        required: 'Enter your password',
                        minLength: {
                            value: 5,
                            message: "Your password should be more than 5 symbols"
                        }
                    })}
                    />
                </label>
                    <i></i>
                </div>
                <div className={c.errorBlock}>
                    {errors?.password && <p>{errors?.password?.message || 'error'}</p>}
                </div>
                <label>
                    Remember Me:
                    <input type={'checkbox'} className={c.checkbox} {...register('rememberMe')}
                    />
                </label>
                <input type={'submit'} disabled={!isValid} className={c.submit}/>

            </form>
            </div>
        </>
    );
};
const mapStateToProps = (state: AppRootStateType): MSTPType =>({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login: loginTC})(LoginPage);

