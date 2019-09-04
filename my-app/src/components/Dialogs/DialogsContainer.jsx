import React from 'react'
import {newMessageBodyCreate, sendMessageCreate} from "../../state/dialogsReducer"
import Dialogs from "./Dialogs"



const DialogsContainer = (props) => {

    let state = props.store.getState().messPage

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreate())
    }
    let messageChange = (body) => {
        props.store.dispatch(newMessageBodyCreate(body))
    }

    return <Dialogs state={state}
                    newMessageBodyCreate={messageChange}
                    sendMessageCreate={sendMessage}/>
}

export default DialogsContainer;