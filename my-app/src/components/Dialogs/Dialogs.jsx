import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <Dialog name={d.name} id={d.id}/>)
    let messElements = props.state.messData.map( m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messElements }
            </div>
        </div>
    )
}

export default Dialogs;