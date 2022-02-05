import React from 'react';
import Avatar from "./Profile_data/jsx/Profile/Avatar";
// import Posts_Item from "./Profile_data/jsx/Posts/Posts";
import Head from "./Profile_data/jsx/Profile/Header.jsx";
import Posting from "./Profile_data/jsx/Posts/Posting.jsx";
// import p from './Profile_data/css/Posts.module.css';
import like from './Profile_data/img/like.png'
import m from './Profile_data/css/Posts.module.css';


let posts_block = [
    { id: 1, message: 'hi', likesCount: 11 },
    { id: 2, message: 'this my first prog', likesCount: 12 },
    { id: 3, message: 'Post message', likesCount: 13 },
    { id: 4, message: 'Plan', likesCount: 14 },
]

const Profile = (props) => {


    return (
        <div>
            <Head />
            <Avatar />
            <Posting />
            <div>
                <li>
                    <div className={m.posts_block}> {posts_block} </div>
                    <div>
                        <img className={m.like} src={like} alt='like' />
                        <a>{props.likesCount} </a>
                    </div>
                </li>
            </div>
            {/* <Posts_Item /> */}
        </div >
    )
}
export default Profile;