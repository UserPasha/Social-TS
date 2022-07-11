

const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE"

export type DialogsType = {
    name: string
    id: number
    img: string
}
export type MessageType = {
    text: string
    id: number
}
export type DialogPageType = {
    textForMessages: string
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type AddMessageActionType ={
    type: "ADD-MESSAGE"
    messageText: string
}
type ChangeNewMessageActionType = ReturnType<typeof changeNewMessageAC>

export type DialogsActionType = AddMessageActionType | ChangeNewMessageActionType

let initialState = {
    textForMessages: "",
    dialogs: [
        {
            name: "Flanders",
            id: 1,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTj3CrOtRVxLxFX0HPeXBcm5GcmTSvkilpEw&usqp=CAU"
        },
        {
            name: "Smiths",
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSwfHaYYPNSoGtAal6SWUKAoV_oKUv0_U5A&usqp=CAU"
        },
        {
            name: "Ramirez",
            id: 3,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQDqvPxr3a1-gPotM0E4y5dUAsw682Itftw&usqp=CAU"
        },
        {
            name: "Chu",
            id: 4,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KoaVE2n2cI_QkbmLg1BYZl2Jvjyms2pp6g&usqp=CAU"
        },
        {
            name: "Dvorovichi",
            id: 5,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCHuWYRwwUByjDqV_4pHY5q5OzsQ9hPxxEA&usqp=CAU"
        },
        {
            name: "Morgans",
            id: 6,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVGfblmh1SfhQaBxeu7ZB8Fv4LWO-kZlmCg&usqp=CAU"
        },
    ],
    messages: [
        {text: "Hi Flanders!", id: 1},
        {text: "Yo!", id: 2},
        {text: "My family", id: 3},
        {text: "Welcome", id: 4},
        {text: "Test post", id: 5},
    ]
}

export const DialogReducer = (state=initialState, action: DialogsActionType ): DialogPageType=>{
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                text: state.textForMessages,
                id: 6,
                img: "",
                name: 'name'
            }
            return {...state,
            textForMessages: "",

                messages: [...state.messages, {id: new Date().getMinutes(), text: action.messageText}]}
        case CHANGE_NEW_MESSAGE:
            return {...state, textForMessages: action.text}
        default:
            return state
    }
}


export const addMessageAC = (messageText: string):AddMessageActionType => {
    return{
        type: "ADD-MESSAGE", messageText: messageText
    }
}
export const changeNewMessageAC = (newText: string) =>{
    return{
        type: "CHANGE-NEW-MESSAGE", text: newText
    } as const
}

