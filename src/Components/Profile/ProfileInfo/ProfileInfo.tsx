import React from "react";
import classes from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <div>
            <div>
                <img className={classes.img}
                     src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+ discription
            </div>
        </div>
    )
}

export default ProfileInfo;