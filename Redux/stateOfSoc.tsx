export type PostType={
    id: number
    title: string
    likes: number
    src: string
}
export type DialogsType = {
    name: string
    id: number
}
export type MessageType = {
    text: string
    id: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogPageType ={
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage: DialogPageType
}
const StateOfSoc = {
    profilePage: {
        posts: [

                {id: 1, title: "Hello!", likes: 10, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"},
                {id: 2, title: "This is my first post", likes: 15, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"},


        ]
    },
    dialogsPage: {
        dialogs:[
            {name: "Flanders", id: 1},
            {name: "Smiths", id: 2},
            {name: "Ramirez", id: 3},
            {name: "Chu", id: 4},
            {name: "Dvorovichi", id: 5},
            {name: "Morgans", id: 6},
        ],
        messages:[
            {text: "Hi Flanders!", id: 1},
            {text: "Yo!", id: 2},
            {text: "My family", id: 3},
            {text: "Welcome", id: 4},
            {text: "Test post", id: 5},
        ]
    }
}
export default StateOfSoc
