import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.post
        .map( p => <Post message={p.message} likes={p.likeCount} />)

    return (
        <div className={classes.postBlock}>
            my posts
            <div>
                <div>
                    <textarea name="" id="" cols="70" rows="2"></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>

        </div>
    )
}

export default MyPosts;