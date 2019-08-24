import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            my posts
            <div>
                <textarea name="" id="" cols="70" rows="2"></textarea>
                <button>add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='hi a am create this blog' />
                <Post message='this first post added' />
            </div>

        </div>
    )
}

export default MyPosts;