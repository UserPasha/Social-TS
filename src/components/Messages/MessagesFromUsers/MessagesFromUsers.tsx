import React, {FC, memo} from 'react';
import c from "./MessageFromUsers.module.css"

export type MessageType = {
    text: string
    id: number
}

const MessagesFromUsers:FC<MessageType> = memo(({text, id}) => {
    return (
        <div className={c.wrapper}>
            <p>{text}</p>
        </div>
    );
});

export default MessagesFromUsers;