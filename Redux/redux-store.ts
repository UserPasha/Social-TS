import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogReducer} from "./dialog-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {UsersReducer} from "./users-reducer";


let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer
})
// type of all application
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

//@ts-ignore
window.store = store


