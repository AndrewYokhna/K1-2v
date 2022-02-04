import React from 'react';
import p from './../Dialog.module.css';


const Message_item = (props) => {
    return <div>
    <div className={p.message}> {props.message} </div>
    </div>
}


export default Message_item;