import React, {ChangeEvent, FC, memo} from 'react';
import c from "./Messages.module.css"
import DialogUsers, {DialogsType} from "./DialogUsers/DialogUsers";
import MessagesFromUsers, {MessageType} from "./MessagesFromUsers/MessagesFromUsers";
import {SubmitHandler, useForm} from "react-hook-form";
import {reset} from "redux-form";


export type MessagesInputs = {
    messagesForm: string,
};

type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    addMessage: (messageText: string) => void
    isAuth: boolean
}


const Messages:FC<DialogPageType> = memo (({addMessage, messages, dialogs, isAuth}) => {

    const addMFormMessage = (data: MessagesInputs) => {
        addMessage(data.messagesForm)
    }

    let dialUsers = dialogs.map((d, index) => <DialogUsers key={index} name={d.name} id={d.id} img={d.img}/>)
    let mesUsers = messages.map((m,index) => <MessagesFromUsers key={index} text={m.text} id={m.id}/>)


    return (
        <div className={c.messageWrapper}>
            <div className={c.userDialogs}>

                {dialUsers}

            </div>
            <div className={c.messages}>
                {mesUsers}
                <div>
                    <MessagesForm onSubmit={addMFormMessage}/>

                </div>


            </div>
        </div>
    );
});
type MessagesFormPropsType = {
    onSubmit: (data: MessagesInputs) => void
}
const MessagesForm = (props: MessagesFormPropsType) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<MessagesInputs>({
        mode: "onBlur"
    });

    const sendMessage = (data: MessagesInputs)=>{
        props.onSubmit(data)
        reset()
    }

    return (
        <form onSubmit={ handleSubmit(sendMessage)} className={c.form}>

            <textarea {...register("messagesForm", {
                required: "Enter your message",
                minLength: {
                    value: 2,
                    message: "Your message should be more than 2 symbols"
                }
            })} />
            {errors?.messagesForm && <div className={c.error}>
                <span>{errors?.messagesForm?.message || "Error"}</span>
            </div>}
            <div>
                <button disabled={!isValid}> Send</button>
            </div>
        </form>
    )
}

export default Messages;