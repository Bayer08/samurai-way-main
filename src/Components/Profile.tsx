import React from "react";
import classes from './Profile.module.css';

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.img}
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
                <div className={classes.item}>
                    <div className='item'>Post1</div>
                    <div className='item'>Post2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;