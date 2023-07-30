import React, {useState} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Massage} from "./Message/Message";

import {v1} from "uuid";
import {DialogsArray, MessagesArray} from "../../Redax/State";

type PropsType = {
    dialogs: Array<DialogsArray>
    messages: Array<MessagesArray>
}

const Dialogs = (props:PropsType) => {

    let [textArea, setTextArea] = useState('')
    let [addMessage,setAddMessage]=useState(props.messages)
    let [error,setError] = useState('')

    const onChangeTextAreaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextArea(event.currentTarget.value)
        setError('')
    }

    const onClickButtonHandler = () => {
        if (textArea.trim()!=='') {
            let currentPost = {id:v1(), message:textArea}
            setAddMessage ([...addMessage,currentPost])
            setTextArea('')
        } else {
            setError('Field is required')
        }

    }
    const onKeyPressHandler = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            onClickButtonHandler()
        }
    }

    let dialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = addMessage.map(message => <Massage message={message.message}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
                <textarea onChange={(event)=>onChangeTextAreaHandler(event)}
                          value={textArea}
                          onKeyDown={onKeyPressHandler}
                          className={error ? classes.errorText : ''}></textarea>
                {error ? <div className={classes.errorMessage}>{error}</div> : null}
                <div><button onClick={onClickButtonHandler}>send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;