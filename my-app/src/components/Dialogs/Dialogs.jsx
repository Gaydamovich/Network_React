import React from 'react'
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog"
import Message from "./Message/Message"



const Dialogs = (props) => {

    let dialogsElements = props.messPage.dialogs.map( d => <Dialog name={d.name} id={d.id}/>)
    let messElements = props.messPage.messData.map( m => <Message message={m.message}/>)
    let newMessage = props.messPage.newMessageBody

    let sendMessage = () => {
        props.sendMessageCreate()
    }
    let messageChange = (event) => {
        let body = event.target.value
        props.newMessageBodyCreate(body)
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