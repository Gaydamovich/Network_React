import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {newMessageBodyCreate, sendMessageCreate} from "../../state/dialogsReducer";



const Dialogs = (props) => {

    let dialogsElements = props.store.dialogs.map( d => <Dialog name={d.name} id={d.id}/>)
    let messElements = props.store.messData.map( m => <Message message={m.message}/>)
    let newMessage = props.store.newMessageBody

    let sendMessage = () => {
        props.dispatch(sendMessageCreate())
    }
    let messageChange = (event) => {
        let body = event.target.value
        props.dispatch(newMessageBodyCreate(body))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{ messElements }</div>
                <div>
                    <div><textarea onChange={ messageChange }
                                   value={newMessage}
                                   placeholder={'add your message'}></textarea></div>
                    <div><button onClick={ sendMessage }>Send</button></div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;