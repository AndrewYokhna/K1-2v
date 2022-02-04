import React from 'react';
import p from './../Dialog.module.css';
import { NavLink } from "react-router-dom";

const Dialog_item = (props) => {
    let path = 'dialog/' + props.id;
    return <div className={p.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default Dialog_item;