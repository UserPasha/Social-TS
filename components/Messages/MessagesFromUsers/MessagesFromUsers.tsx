import React from 'react';
export type MessageType = {
    text: string
    id: number
}

const MessagesFromUsers = (props: MessageType) => {
    return (
        <div>
            {props.text}
        </div>
    );
};

export default MessagesFromUsers;