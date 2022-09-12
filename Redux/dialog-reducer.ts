
const ADD_MESSAGE = "ADD-MESSAGE"


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
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type AddMessageActionType ={
    type: "ADD-MESSAGE"
    messageText: string
}


export type DialogsActionType = AddMessageActionType

let initialState = {
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
            return {...state,
                messages: [...state.messages, {id: new Date().getMinutes(), text: action.messageText}]}
        default:
            return state
    }
}


export const addMessageAC = (messageText: string):AddMessageActionType => {
    return{
        type: "ADD-MESSAGE", messageText: messageText
    }
}


