import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsArray} from "../../Redax/State";


type PropsType = {
    posts: Array<PostsArray>
    // updateProfilePagePostText: (textArea: string) => void
    updatePostText: string
    // addProfilePagePostText: (textArea: string) => void
    error:string
    // updateProfilePageError:(error: string) => void
    dispatch:(action:string, text:string)=>void
}

function Profile(props: PropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     // updateProfilePagePostText={props.updateProfilePagePostText}
                     updatePostText={props.updatePostText}
                     dispatch={props.dispatch}
                     // addProfilePagePostText={props.addProfilePagePostText}
                     // updateProfilePageError={props.updateProfilePageError}
            error={props.error}/>
        </div>
    )
}

export default Profile;