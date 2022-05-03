import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogReducer} from "./dialog-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {storeType} from "./stateOfSoc";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogReducer,
    sidebar: SidebarReducer
})

//export const store:storeType = createStore(reducers)


