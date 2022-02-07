import React from 'react';
import c from "./Messages.module.css"
import DialogUsers, {DialogsType} from "./DialogUsers/DialogUsers";
import MessagesFromUsers, {MessageType} from "./MessagesFromUsers/MessagesFromUsers";
import StateOfSoc from "../../Redux/stateOfSoc";


type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}


const Messages = (props: DialogPageType) => {
    let dialUsers = StateOfSoc.dialogsPage.dialogs.map(d =>  <DialogUsers name={d.name} id={d.id} img={d.img}/> )
    let mesUsers = StateOfSoc.dialogsPage.messages.map(m =>  <MessagesFromUsers text={m.text} id={m.id}/>)
    return (
        <div className={c.messageWrapper}>
            <div className={c.userDialogs}>


                {dialUsers}

            </div>
            <div className={c.messages}>
                {mesUsers}

            </div>
        </div>
    );
};

export default Messages;