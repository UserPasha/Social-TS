import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Routes, Route} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersComponentContainer from './components/Users/UsersComponentContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";


type stateType = {

}

function App(props: stateType) {


    return (
        <div className={"appWrapper"}>
            <Header/>
            <Navbar/>
            <div className={"appWrapperContent"}>
                <Routes>
                    <Route path="/profile/:userId?" element={<ProfileContainer />}/>
                    <Route path="/messages" element={<MessagesContainer />}/>
                    <Route path="/users" element={<UsersComponentContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;

