import React from "react";
import classes from './Post.module.css';

type PropsType={
    massage:string
    likeCounts:number
}

function Post(props:PropsType) {
    return (
        <div className={classes.itemBlock}>
            <div className={classes.item}>
                <img src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"/>
                {props.massage}
                <div>
                    <span>Like: {props.likeCounts}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;