import {DialogPageType, DialogsActionType, MessageType} from "./dialog-reducer";
import {PostType, ProfileActionType, ProfilePageType} from "./profile-reducer";


export type ActionsTypes = DialogsActionType | ProfileActionType


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export type storeType = {
    _StateOfSoc: RootStateType,
    _onchangeTree: () => void
    addPost: (postText: string) => void
    addMessage: (messageText: string) => void
    changeForNewMessage: (text: string) => void
    changeForNewPost: (text: string) => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType,
    dispatch: (action: ActionsTypes) => void
}

const store: storeType = {
    _StateOfSoc: {
        profilePage: {
            profile: null,
            textForPost: "",
            posts: [

                {
                    id: 1,
                    title: "Hello!",
                    likes: 10,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
                },
                {
                    id: 2,
                    title: "This is my first post",
                    likes: 15,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
                },


            ]
        },
        dialogsPage: {
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
    },
    _onchangeTree(){
        console.log("hello!")
    },
    addPost(postText){
        const newPost: PostType = {
            id: new Date().getTime(),
            title: postText,
            likes: 0,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
        }
        this._StateOfSoc.profilePage.posts.push(newPost)
        this._StateOfSoc.profilePage.textForPost = ""
        this._onchangeTree()
        // stateR.profilePage.newPostText = ""
        // rerenderEntireTree(stateR)
    },
    addMessage(messageText){
        const newMessage: MessageType = {
            text: messageText,
            id: 6
        }
        this._StateOfSoc.dialogsPage.messages.push(newMessage)
        this._StateOfSoc.dialogsPage.textForMessages = ""
        this._onchangeTree()
    },
    changeForNewMessage(text) {
        this._StateOfSoc.dialogsPage.textForMessages = text
        this._onchangeTree()
    },
    changeForNewPost (text) {
        this._StateOfSoc.profilePage.textForPost = text
        this._onchangeTree()
    },
    subscribe(callback){
        this._onchangeTree = callback
    },
    getState(){
        return this._StateOfSoc
    },
    dispatch(action){
         if (action.type === "ADD-POST"){
             const newPost: PostType = {
                 id: new Date().getTime(),
                 title: action.postText,
                 likes: 0,
                 src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
             }
             this._StateOfSoc.profilePage.posts.push(newPost)
             this._StateOfSoc.profilePage.textForPost = ""
             this._onchangeTree()
         } else if( action.type === "ADD-MESSAGE"){
             const newMessage: MessageType = {
                 text: action.messageText,
                 id: 6
             }
             this._StateOfSoc.dialogsPage.messages.push(newMessage)
             this._StateOfSoc.dialogsPage.textForMessages = ""
             this._onchangeTree()
         } else if(action.type === "CHANGE-NEW-MESSAGE"){
             this._StateOfSoc.dialogsPage.textForMessages = action.text
             this._onchangeTree()
         } else if(action.type === "CHANGE-NEW-POST"){
             this._StateOfSoc.profilePage.textForPost = action.text
             this._onchangeTree()
         }
    }
}
export default store
