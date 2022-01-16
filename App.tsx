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

function App() {

    return (
        <div className={"appWrapper"}>
            <Header/>
            <Navbar/>
            <div className={"appWrapperContent"}>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/messages" element={<Messages/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;

