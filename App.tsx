import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Routes, Route} from "react-router-dom";
import {storeType} from './Redux/stateOfSoc';


type stateType = {
    store: storeType
    changeForNewPost: (text: string) => void
    changeForNewMessage: (text: string) => void
}

function App(props: stateType) {
    const state = props.store.getState()

    return (
        <div className={"appWrapper"}>
            <Header/>
            <Navbar/>
            <div className={"appWrapperContent"}>
                <Routes>
                    <Route path="/profile" element={<Profile posts={state.profilePage.posts}
                                                             addPost={props.store.addPost.bind(props.store)}
                                                             forNewPost={state.profilePage.textForPost}
                                                             changeForNewPost={props.store.changeForNewPost.bind(props.store)}
                                                             dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path="/messages" element={<Messages dialogs={state.dialogsPage.dialogs}
                                                               messages={state.dialogsPage.messages}
                                                               addMessage={props.store.addMessage.bind(props.store)}
                                                               forNewMessage={state.dialogsPage.textForMessages}
                                                               changeForNewMessage={props.changeForNewMessage.bind(props.store)}
                                                               dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;

