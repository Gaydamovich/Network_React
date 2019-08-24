import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://a.deviantart.net/avatars/a/n/antgell.png?7" alt="avapost"/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;