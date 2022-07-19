import React from 'react';
import {addMessageAC, changeNewMessageAC} from "../../Redux/dialog-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {DialogsType} from "./DialogUsers/DialogUsers";
import {MessageType} from "./MessagesFromUsers/MessagesFromUsers";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    forNewMessage: string,
    isAuth: boolean

}
type mapDispatchToPropsType = {
    addMessage: (message: string) => void
    changeForNewMessage: (newText: string) => void
}
let mapStateToProps = (state: AppRootStateType):mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        forNewMessage: state.dialogsPage.textForMessages,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addMessage: (message: string) => {
            dispatch(addMessageAC(message))
        },
        changeForNewMessage: (newText: string) => {
            dispatch(changeNewMessageAC(newText))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;