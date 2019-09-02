const NEW_MESSAGE_BODY = 'NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            if (body) {
                state.messData.push({id: 6, message: body})
            }
            return state
        default:
            return state

    }
}

export const newMessageBodyCreate = (body) => ({type: NEW_MESSAGE_BODY, body: body})
export const sendMessageCreate = () => ({type: SEND_MESSAGE })

export default dialogsReducer;