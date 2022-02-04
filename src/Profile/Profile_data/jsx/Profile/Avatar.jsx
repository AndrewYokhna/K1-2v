import React from "react";
import p from './../../css/Avatar.module.css';
import avatar from './../../img/avatar.jpg';



const Avatar = () => {
    return <div className={p.descriptionBlock}>
        <div className={p.face}>
            <h2> <img src={avatar} alt='avatar' />
                Andrew Yokhna</h2>
        </div>
    </div>
}

export default Avatar;
