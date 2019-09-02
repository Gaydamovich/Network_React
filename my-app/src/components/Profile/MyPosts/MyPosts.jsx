import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addNewPostActionCreate, changePostActionCreate} from "../../../state/profileReducer";

const MyPosts = (props) => {

    let newPostElem = React.createRef();

    let postElements = props.store.getState().profilePage.postData
        .map( p => <Post message={p.message} likes={p.likeCount} />)



    let addNewPost = () => {
        props.dispatch(addNewPostActionCreate())
    }

    let changePost = () => {
        let text = newPostElem.current.value;
        props.dispatch(changePostActionCreate(text));
    }

    return (
        <div className={classes.postBlock}>
            my posts
            <div>
                <div>
                    <textarea onChange={changePost}
                              ref={newPostElem}
                              cols="70"
                              rows="2"
                              value={props.store.getState().profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addNewPost}>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>

        </div>
    )
}

export default MyPosts;