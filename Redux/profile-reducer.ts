
const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST = "CHANGE-NEW-POST"

export type PostType = {
    id: number
    title: string
    likes: number
    src: string
}
export type ProfilePageType = {
    textForPost: string
    posts: Array<PostType>
}

type AddPostActionType ={
    type: "ADD-POST"
    postText: string
}

type ChangeNewPostActionType = ReturnType<typeof changeNewPostAC>

export type ProfileActionType = AddPostActionType | ChangeNewPostActionType

let initialState = {
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
}

export const ProfileReducer = (initialState: ProfilePageType, action: ProfileActionType)=>{
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 3,
                title: initialState.textForPost,
                likes: 0,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
            }
            initialState.posts.push(newPost)
            initialState.textForPost=""
            return initialState
        case CHANGE_NEW_POST:
            initialState.textForPost = action.text
            return initialState
        default:
            return initialState
    }
}



export const addPostAC = (postText: string):AddPostActionType => {
    return{
        type: "ADD-POST", postText: postText
    }
}

export const changeNewPostAC = (newText: string) =>{
    return{
        type: "CHANGE-NEW-POST", text: newText
    } as const
}

