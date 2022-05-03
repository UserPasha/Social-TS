import React from 'react';
import StoreContext from "../../Redux/storeContext";
import {addMessageAC, changeNewMessageAC} from "../../Redux/dialog-reducer";
import Messages from "./Messages";

type MessagesContainerPropsType = {

}
const MessagesContainer = (props: MessagesContainerPropsType) => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                let addMessage = () => {
                    store.dispatch(addMessageAC(state.dialogsPage.textForMessages))
                }
                let changeNewMessage = (newText: string) => {
                    let action = changeNewMessageAC(newText)
                    store.dispatch(action)
                }
                return <Messages dialogs={state.dialogsPage.dialogs}
                                 messages={state.dialogsPage.messages}
                                 addMessage={addMessage}
                                 forNewMessage={state.dialogsPage.textForMessages}
                                 changeForNewMessage={changeNewMessage}
                />
            }

            }
        </StoreContext.Consumer>
    );
};

export default MessagesContainer;