import React from 'react'
import classes from './Friends.module.css'
import Friend from "./Friend/Friend";


const Friends = (props) => {

    let friendElements = props.state.friends.map( friend => <Friend name={friend.name}/>)
    return (
        <div>
            <div className={classes.heading}>
                <p>Friends</p>
            </div>
            <div className={classes.friendsItem}>
                { friendElements }
            </div>
        </div>
    )
}

export default Friends