import React from 'react';
import './App.css';
import './Components/Header.module.css';
// import './Components/Navbar.module.css';
// import './Components/Profile.module.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
// import Technologies from "./Technologies";
// import Footer from "./Footer";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


export default App;
