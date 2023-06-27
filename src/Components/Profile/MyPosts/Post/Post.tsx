import React from "react";
import classes from './Post.module.css';

type propsType={
    massage:string
    likeCounts:number
}

function Post(props:propsType) {
    return (
            <div className={classes.item}>
                    <img src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"/>
                {props.massage}
                <div>
                    <span>Like: {props.likeCounts}</span>
                </div>
            </div>
    )
}

export default Post;