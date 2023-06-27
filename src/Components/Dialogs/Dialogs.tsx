import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog+" "+classes.active}>
                    Dima
                </div>
                <div className={classes.dialog}>
                    Yura
                </div>
                <div className={classes.dialog}>
                    Sveta
                </div>
                <div className={classes.dialog}>
                    Egor
                </div>
                <div className={classes.dialog}>
                    Roma
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