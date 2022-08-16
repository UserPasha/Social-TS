import React, {ChangeEvent} from 'react';
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


const Messages = (props: DialogPageType) => {

    const addMFormMessage = (data: MessagesInputs) => {
        props.addMessage(data.messagesForm)
    }

    let dialUsers = props.dialogs.map(d => <DialogUsers name={d.name} id={d.id} img={d.img}/>)
    let mesUsers = props.messages.map(m => <MessagesFromUsers text={m.text} id={m.id}/>)


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
};
type MessagesFormPropsType = {
    onSubmit: (data: MessagesInputs) => void
}
const MessagesForm = (props: MessagesFormPropsType) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<MessagesInputs>({
        mode: "onBlur"
    });
     const onSubmit: SubmitHandler<MessagesInputs> = (data) => {
         console.log(data)
         reset()
     };

    return (
        <form onSubmit={handleSubmit(props.onSubmit)} className={c.form}>

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