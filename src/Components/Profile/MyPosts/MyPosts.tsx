import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={classes.item}>
                <Post massage={"HI"} likeCounts={15}/>
                <Post massage={"KU-KU"} likeCounts={25}/>
                <Post massage={"TURUTUTU"} likeCounts={10}/>
                <Post massage={"Good morning"} likeCounts={7}/>
                <Post massage={"HALLO"} likeCounts={22}/>
                <Post massage={"YO"} likeCounts={10}/>
            </div>
        </div>
    )
}

export default MyPosts;