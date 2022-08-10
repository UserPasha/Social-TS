import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogReducer} from "./dialog-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {UsersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware  from "redux-thunk";
import {reducer as formReducer} from 'redux-form'


let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer
})
// type of all application
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store


