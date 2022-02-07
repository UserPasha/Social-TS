import React from 'react';
import c from "./MessageFromUsers.module.css"

export type MessageType = {
    text: string
    id: number
}

const MessagesFromUsers = (props: MessageType) => {
    return (
        <div className={c.wrapper}>
            <p>{props.text}</p>
        </div>
    );
};

export default MessagesFromUsers;