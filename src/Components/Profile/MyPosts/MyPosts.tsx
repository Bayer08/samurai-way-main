import React, {useState} from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsArray} from "../../../App";
import {v1} from "uuid";

type PropsType = {
    posts:Array<PostsArray>
}


function MyPosts(props:PropsType) {
    let [textArea, setTextArea] = useState('')
    let [post,setPost]=useState(props.posts)
    let [error,setError] = useState('')

    const onChangeTextAreaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextArea(event.currentTarget.value)
        setError('')
    }
    const onClickButtonHandler = () => {
        if (textArea.trim()!=='') {
            let currentPost = {id:v1(), message:textArea, likesCount:0}
            let addPost=[currentPost,...post]
            setPost(addPost)
            setTextArea('')
        } else {
            setError('Field is required')
        }

    }


    let postElemnts = post.map(post=><Post massage={post.message} likeCounts={post.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        className={error ? classes.errorText : ''}
                        value={textArea}
                        onChange={(event)=>onChangeTextAreaHandler(event)}></textarea>
                    {error ? <div className={classes.errorMessage}>{error}</div> : null}
                </div>
                <div>
                    <button onClick={onClickButtonHandler}>Add Post</button>
                </div>
            </div>
            <div className={classes.item}>
                {postElemnts}
            </div>
        </div>
    )
}

export default MyPosts;