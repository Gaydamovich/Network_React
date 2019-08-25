import React from 'react';
import classes from './ProfileInfo.module.css';



const ProfileInfo = props => {
    return (
        <div>
            <div>
                <img src='https://teomedia.ru/uploads/SMM-strategiya3.png' width='100%' height='380px' />
            </div>
            <div className={classes.discriptionBlock}>
                <img src='https://st.weblancer.net/download/3187836_120xs.jpg' />
            </div>
        </div>
    )
}

export default ProfileInfo