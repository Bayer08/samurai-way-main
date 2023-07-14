import React from 'react';
import classes from '../Dialogs.module.css';

type propsType = {
    message: string
}

export const Massage = (props:propsType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}
