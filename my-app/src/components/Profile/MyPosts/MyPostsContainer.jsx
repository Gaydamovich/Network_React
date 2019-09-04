import React from 'react'
import {addNewPostActionCreate, changePostActionCreate} from "../../../state/profileReducer"
import MyPosts from "./MyPosts"



const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addNewPostActionCreate())
    }

    let changePost = (text) => {
        props.store.dispatch(changePostActionCreate(text));
    }

    return <MyPosts updateNewPostText={changePost}
                    addPost={addPost}
                    posts={state.profilePage.postData}
                    newPostText={state.profilePage.newPostText}/>
}

export default MyPostsContainer;