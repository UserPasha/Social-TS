export type PostType={
    id: number
    title: string
    likes: number
    src: string
}
export type DialogsType = {
    name: string
    id: number
    img: string
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
            {name: "Flanders", id: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTj3CrOtRVxLxFX0HPeXBcm5GcmTSvkilpEw&usqp=CAU"},
            {name: "Smiths", id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSwfHaYYPNSoGtAal6SWUKAoV_oKUv0_U5A&usqp=CAU"},
            {name: "Ramirez", id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQDqvPxr3a1-gPotM0E4y5dUAsw682Itftw&usqp=CAU"},
            {name: "Chu", id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KoaVE2n2cI_QkbmLg1BYZl2Jvjyms2pp6g&usqp=CAU"},
            {name: "Dvorovichi", id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCHuWYRwwUByjDqV_4pHY5q5OzsQ9hPxxEA&usqp=CAU"},
            {name: "Morgans", id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVGfblmh1SfhQaBxeu7ZB8Fv4LWO-kZlmCg&usqp=CAU"},
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
