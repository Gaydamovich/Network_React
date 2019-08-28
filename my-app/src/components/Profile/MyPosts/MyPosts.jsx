import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {updateNewPostText} from "../../../state/state";

const MyPosts = (props) => {

    let newPostElem = React.createRef();

    let postElements = props.post
        .map( p => <Post message={p.message} likes={p.likeCount} />)

    let addNewPost = () => {
        // let text = newPostElem.current.value;
        props.addPost()
    }

    let changePost = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
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
                              value={props.new}/>
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