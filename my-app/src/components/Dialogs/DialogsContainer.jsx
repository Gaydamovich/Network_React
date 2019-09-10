import React from 'react'
import {newMessageBodyCreate, sendMessageCreate} from "../../state/dialogsReducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        messPage: state.messPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newMessageBodyCreate: (body) => {
            dispatch(newMessageBodyCreate(body))
    },
        sendMessageCreate: () => {
            dispatch(sendMessageCreate())
        }
    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;