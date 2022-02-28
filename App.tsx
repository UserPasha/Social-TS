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
import StateOfSoc, {RootStateType, addPost, addMessage} from './Redux/stateOfSoc'
import stateOfSoc from "./Redux/stateOfSoc";

//import Post, {PostTypeProps} from "./components/Profile/Posts/Post/Post";
type stateType = {
    state: RootStateType
    changeForNewPost: (text: string)=> void
    changeForNewMessage: (text: string)=> void
}

function App(props: stateType) {
    // let posItems =  StateOfSoc.profilePage

    // let dialogPage = props.StateOfSoc.dialogsPage StateOfSoc.dialogsPage.dialogs

    /*profilePage={StateOfSoc.profilePage} dialogsPage={StateOfSoc.dialogsPage}*/
    return (
        <div className={"appWrapper"}>
            <Header/>
            <Navbar/>
            <div className={"appWrapperContent"}>
                <Routes>
                    <Route path="/profile" element={<Profile posts={StateOfSoc.profilePage.posts}
                                                             addPost={addPost}
                                                             forNewPost={stateOfSoc.profilePage.textForPost}
                                                                 changeForNewPost={props.changeForNewPost}/>}/>
                    <Route path="/messages" element={<Messages dialogs={StateOfSoc.dialogsPage.dialogs}
                                                               messages={StateOfSoc.dialogsPage.messages}
                                                               addMessage={addMessage}
                                                               forNewMessage={stateOfSoc.dialogsPage.textForMessages}
                                                               changeForNewMessage={props.changeForNewMessage}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;

