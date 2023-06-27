import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog+" "+classes.active}>
                    <NavLink to="/dialog/1">Dima</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialog/2">Yura</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialog/3">Sveta</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialog/4">Egor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialog/5">Roma</NavLink>
                </div>
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