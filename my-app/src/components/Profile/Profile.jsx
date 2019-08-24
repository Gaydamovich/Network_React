import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://mentera.org/wp-content/uploads/2018/12/grasp-the-luxury-dual-screen-wallpaper-3840x1080-of-dual-screen-wallpaper-3840x1080.png' width='100%' height='350px' />
            </div>
            <div>
                <img src='https://st.weblancer.net/download/3187836_120xs.jpg' />
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;