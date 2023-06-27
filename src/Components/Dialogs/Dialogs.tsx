import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type propsType = {
    id:number
    name:string
}


export const DialogItem = (props:propsType)=> {
    let path="/Dialog/" + props.id
    return (
        <div className={classes.dialog+" "+classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



const Dialogs = (props:propsType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={"Dima"} id={1}/>
                <DialogItem name={"Yura"} id={2}/>
                <DialogItem name={"Sveta"} id={3}/>
                <DialogItem name={"Egor"} id={4}/>
                <DialogItem name={"Roma"} id={5}/>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>YO</div>
                <div className={classes.message}>HI</div>
                <div className={classes.message}>How are you?</div>
            </div>
        </div>
    )
}

export default Dialogs;