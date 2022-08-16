import React from 'react';
import {addMessageAC} from "../../Redux/dialog-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {DialogsType} from "./DialogUsers/DialogUsers";
import {MessageType} from "./MessagesFromUsers/MessagesFromUsers";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRediresct";


type mapStateToPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

type mapDispatchToPropsType = {
    addMessage: (message: string) => void

}
let mapStateToProps = (state: AppRootStateType):mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addMessage: (message: string) => {
            dispatch(addMessageAC(message))
        }
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect)(Messages)