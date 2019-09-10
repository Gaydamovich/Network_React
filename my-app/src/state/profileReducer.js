const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    postData: [
        {id: 1, message: 'hi a am create this blog', likeCount: 12},
        {id: 2, message: 'this first post added', likeCount: 5}
    ],
    newPostText: 'Введите свою новость'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export const addNewPostActionCreate = () => ({type: ADD_POST})
export const changePostActionCreate = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;