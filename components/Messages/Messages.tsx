import React from 'react';
import c from "./Messages.module.css"
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number
}
type MessageItemType = {
    text: string
    id: number
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = "/messages/" + props.id
    return <div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const DialogData = [
    {name: "Flanders", id: 1},
    {name: "Smiths", id: 2},
    {name: "Ramirez", id: 3},
    {name: "Chu", id: 4},
    {name: "Dvorovichi", id: 5},
    {name: "Morgans", id: 6},
]
let DialogElement = DialogData.map(el => <DialogItem name={el.name} id={el.id}/>)

const MessageData = [
    {text: "Hi Flanders!", id: 1},
    {text: "Yo!", id: 2},
    {text: "My family", id: 3},
    {text: "Welcome", id: 4},
    {text: "Test post", id: 5},
]


const MessageItem = (props: MessageItemType) => {
    return <div> {props.text} </div>
}



let MessageElement = MessageData.map(el => <MessageItem text={el.text} id={el.id}/>)
/*const MessageItem: React.FC<MessageItemType> = ({
                                                    text,
                                                    id
                                                }) => {
    return <div> {text} </div>
}*/


const Messages = () => {
    return (
        <div className={c.messageWrapper}>
            <div className={c.userDialogs}>

                {DialogElement}
            </div>
            <div className={c.messages}>
                {MessageElement}
            </div>
        </div>
    );
};

export default Messages;