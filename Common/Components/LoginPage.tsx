import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type FormDataType = {
    login: string
    password:string
    rememberMe: boolean
}
const LoginPage = () => {
    const onSubmit = (formData: FormDataType)=>{
        console.log(formData)
    }
    return (<>
        <h1>
            LOGIN
        </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}
export default LoginPage;

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)