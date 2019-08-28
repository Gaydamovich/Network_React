import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {addPost, updateNewPostText} from './state/state'


export let rerenderTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         updateNewPostText={updateNewPostText}/>, document.getElementById('root'));
}