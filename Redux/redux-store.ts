import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionType, ProfileReducer} from "./profile-reducer";
import {DialogReducer, DialogsActionType} from "./dialog-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {UsersActionType, UsersReducer} from "./users-reducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction}  from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";


let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})
// type of all application
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//export type AllAppActionsType = UsersActionType | DialogsActionType | ProfileActionType | AuthActionType

//export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllAppActionsType>

//@ts-ignore
window.store = store


