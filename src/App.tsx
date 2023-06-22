import React from 'react';
import './App.css';
// import Header from "./Header";
// import Technologies from "./Technologies";
// import Footer from "./Footer";


function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg"/>
            </header>
            <nav className='nav'>
                <div><
                    a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </nav>
            <div className='content'>
                <div>
                    <img
                        src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
                </div>
                <div>
                    ava+ discription
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>Post1</div>
                        <div>Post2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
