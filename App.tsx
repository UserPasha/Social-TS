import React, {useEffect} from 'react';
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
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./Common/Components/LoginPage";
import {AppRootStateType} from "./Redux/redux-store";
import {compose} from "redux";
import {connect, useSelector} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import {Navigate} from "react-router-dom";
import {withRouter} from "./Common/WithRouterSelf";
import {Rings} from 'react-loader-spinner'


// type stateType = {
//     isInitialize: () => void
// }
// type AppPropsType = mapStateToPropsType & mapDispatchToProps
// type mapDispatchToProps = {
//     initialize: ()=> void
// }
// type mapStateToPropsType = {
//     isInitialize: boolean
// }

function App() {
    //const isInitialize = useSelector<AppRootStateType, boolean>((state)=> state.app.isInitialize)
    //const isAuth = useSelector<AppRootStateType, boolean>((state)=> state.auth.isAuth)
    useEffect(() => {
        initializeApp()

    }, [])

    // if (!isInitialize) {
    //     return <Rings color="#00BFFF" height={80} width={80}/>
    //
    // }

    return (
        <div className={"appWrapper"}>
            <HeaderContainer/>
            <Navbar/>
            <div className={"appWrapperContent"}>
                <Routes>
                    <Route path="/profile" element={<ProfileContainer/>}/>
                    <Route path="/profile/:id" element={<ProfileContainer/>}/>
                    <Route path="/messages" element={<MessagesContainer/>}/>
                    <Route path="/users" element={<UsersComponentContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

// const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
//     return {
//         isInitialize: state.app.isInitialize
//     }
// }

export default App
//export default compose(connect(mapStateToProps, {initialize: initializeApp}), withRouter)(App);

