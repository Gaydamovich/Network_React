import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <Dialog name='Dima' id='1'/>
                <Dialog name='Karina' id='2'/>
                <Dialog name='Steshka' id='3'/>
            </div>
            <div className={classes.messages}>
               <Message message='Hi'/>
               <Message message='How are you?'/>
               <Message message='Papa hi =)'/>
            </div>
        </div>
    )
}

export default Dialogs;