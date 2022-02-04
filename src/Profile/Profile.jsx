import React from 'react';
import Avatar from "./Profile_data/img/avatar.jpg";
import Posts_Item from "./Profile_data/jsx/Posts/Posts";
import Head from "./Profile_data/jsx/Profile/Header.jsx";
import Posting from "./Profile_data/jsx/Posts/Posting.jsx";
import p from './Profile_data/css/Posts.module.css';



let PostsData = [
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
        <div className={p.posts_block + ' ' + p.item}>
            <Posts_Item post={PostsData[0].message} likesCount={PostsData[0].likesCount} />
            <Posts_Item post={PostsData[1].message} likesCount={PostsData[1].likesCount} />
            <Posts_Item post={PostsData[2].message} likesCount={PostsData[2].likesCount} />
            <Posts_Item post={PostsData[3].message} likesCount={PostsData[3].likesCount} />
        </div>
    </div>
    )
}
export default Profile;