let store = {
    _state: {
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
            ],
            newMessageBody: ''
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Karina'},
                {id: 3, name: 'Steshka'}
            ]
        }

    },
    _rerenderTree() {

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderTree = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messPage = dialogsReducer(this._state.messPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._rerenderTree(this._state)

    }
}
