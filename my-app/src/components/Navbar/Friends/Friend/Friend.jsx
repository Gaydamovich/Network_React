import React from 'react'
import classes from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://pp.userapi.com/c851328/v851328227/147cf0/qYJhxowuDPg.jpg?ava=1" alt="photo" width='35px'/>
            <p>{props.name}</p>
        </div>
    )
}

export default Friend