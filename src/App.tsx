import React from 'react';
import './App.css';
import './Components/Header/Header.module.css';
// import './Components/Navbar.module.css';
// import './Components/Profile.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
// import Technologies from "./Technologies";
// import Footer from "./Footer";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="content">
                <Profile/>
                {/*<Dialogs/>*/}
            </div>
        </div>
    )
}


export default App;
