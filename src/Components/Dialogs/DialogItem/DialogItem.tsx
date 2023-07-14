import React from 'react';
import classes from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type propsType = {
    id: string
    name: string
}

export const DialogItem = (props: propsType) => {
    let path = "/Dialog/" + props.id
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
