import {rerenderTree} from "../render";

let state = {

    profilePage: {
        postData: [
            {id: 1, message: 'hi a am create this blog', likeCount: 12},
            {id: 2, message: 'this first post added', likeCount: 5}
        ],
        newPostText: 'Введите свою новость'
    },
    messPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Karina'},
            {id: 3, name: 'Steshka'}
        ],
        messData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Papa hi =)'}
        ]
    },
    sideBar: {
        friends: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Karina'},
            {id: 3, name: 'Steshka'}
        ]
    }

}

window.state = state

export let addPost = () => {
     let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderTree(state)

}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderTree(state);
}

export default state