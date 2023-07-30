import React, {useState} from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {v1} from "uuid";
import {PostsArray} from "../../../Redax/State";

type PropsType = {
    posts:Array<PostsArray>
    // updateProfilePagePostText:(textArea:string)=>void
    updatePostText:string
    // addProfilePagePostText: (textArea: string) => void
    error:string
    // updateProfilePageError:(error: string) => void
    dispatch:(action:string, text:string)=>void
}

function MyPosts(props:PropsType) {
    const onChangeTextAreaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch('UPDATE-PROFILE-PAGE-POST-TEXT', event.currentTarget.value)
        // props.updateProfilePagePostText(event.currentTarget.value)
        // props.updateProfilePageError('')
    }
    const onKeyPressHandler = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            props.dispatch('ADD-PROFILE-PAGE-POST-TEXT', e.currentTarget.value)
            // props.addProfilePagePostText(e.currentTarget.value)
            e.currentTarget.value=''
        }
    }
    console.log('error='+props.error)
    let postElemnts = props.posts.map(post=><Post massage={post.message} likeCounts={post.likesCount}/>)
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        className={props.error!=='' ? classes.errorText : ''}
                        value={props.updatePostText}
                        onKeyDown={onKeyPressHandler}
                        onChange={(event)=>onChangeTextAreaHandler(event)}></textarea>
                    {props.error ? <div className={classes.errorMessage}>{props.error}</div> : null}
                </div>
                <div>
                    <button onClick={()=>props.dispatch('ADD-PROFILE-PAGE-POST-TEXT', props.updatePostText)}>Add Post</button>
                </div>
            </div>
            <div className={classes.item}>
                {postElemnts}
            </div>
        </div>
    )
}
export default MyPosts;