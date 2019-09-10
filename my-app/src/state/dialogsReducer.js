const NEW_MESSAGE_BODY = 'NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Karina'},
        {id: 3, name: 'Steshka'}
    ],
    messData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Papa hi =)'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messData: [...state.messData, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export const newMessageBodyCreate = (body) => ({type: NEW_MESSAGE_BODY, body: body})
export const sendMessageCreate = () => ({type: SEND_MESSAGE })

export default dialogsReducer;