import React from 'react'
import {addNewPostActionCreate, changePostActionCreate} from "../../../state/profileReducer"
import MyPosts from "./MyPosts"
import {connect} from "react-redux";




const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addNewPostActionCreate())
        },
        updateNewPostText: (text) => {
            dispatch(changePostActionCreate(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;