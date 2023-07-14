import React from 'react';
import './App.css';
import './Components/Header/Header.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

export type PostsArray = {
    id: string,
    message: string,
    likesCount: number
}
export type DialogsArray = {
    id: string,
    name: string
}
export type MessagesArray = {
    id: string,
    message: string
}


export type PropsType = {
    state:{
        profilePage:{
            posts: PostsArray[],
            dialogs: DialogsArray[]
        }
        messagesPage:{
            messages: MessagesArray[]
        }
    }
}


function App(props: PropsType) {
    console.log(props)
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.profilePage.dialogs} messages={props.state.messagesPage.messages}/>}/>
                    {/*<Route path="/news" component={News}/>*/}
                    {/*<Route path="/music" component={Music}/>*/}
                    {/*<Route path="/settings" component={Settings}/>*/}
                </div>
            </div>
    )
}


export default App;
