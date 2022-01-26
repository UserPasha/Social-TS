import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages  from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Routes, Route} from "react-router-dom";
import StateOfSoc, {RootStateType, ProfilePageType}  from './Redux/stateOfSoc'

//import Post, {PostTypeProps} from "./components/Profile/Posts/Post/Post";


function App(props: RootStateType) {
   // let posItems =  StateOfSoc.profilePage

   // let dialogPage = props.StateOfSoc.dialogsPage StateOfSoc.dialogsPage.dialogs


    return (
        <div className={"appWrapper"}>
            <Header/>
            <Navbar/>
            <div className={"appWrapperContent"}>
                <Routes>
                    <Route path="/profile" element= {<Profile posts={StateOfSoc.profilePage.posts}/>} />
                    <Route path="/messages" element={<Messages dialogs={StateOfSoc.dialogsPage.dialogs} messages={StateOfSoc.dialogsPage.messages}/> } />
                <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;

