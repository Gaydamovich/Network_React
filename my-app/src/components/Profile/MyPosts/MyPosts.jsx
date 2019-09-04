import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElem = React.createRef()

    let postElements = props.posts.map( p => <Post message={p.message} likes={p.likeCount} />)

    let onAddPost = () => {
        props.addPost()
    }

    let changePost = () => {
        let text = newPostElem.current.value
        props.updateNewPostText(text)
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
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>

        </div>
    )
}

export default MyPosts;