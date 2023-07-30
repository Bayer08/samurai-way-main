import React from 'react';
import './App.css';
import './Components/Header/Header.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "./Redax/State";

type PropsType = {
    state: StateType
    dispatch: (action:string, text:string)=>void
    // updateProfilePagePostText: (textArea: string) => void
    // addProfilePagePostText: (textArea: strin g) => void
    // updateProfilePageError:(error: string) => void
}

function App(props: PropsType) {
    console.log(props)
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="content">
                <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts}
                                                              error={props.state.profilePage.error}
                                                              dispatch={props.dispatch}
                                                              // updateProfilePagePostText={props.updateProfilePagePostText}
                                                              updatePostText={props.state.profilePage.updatePostText}
                                                              // addProfilePagePostText={props.addProfilePagePostText}
                                                              // updateProfilePageError={props.updateProfilePageError}
                    />}
                />
                <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.profilePage.dialogs}
                                                              messages={props.state.messagesPage.messages}/>}/>
                {/*<Route path="/news" component={News}/>*/}
                {/*<Route path="/music" component={Music}/>*/}
                {/*<Route path="/settings" component={Settings}/>*/}
            </div>
        </div>
    )
}

export default App;
