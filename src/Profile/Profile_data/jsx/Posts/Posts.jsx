import React from "react";
import posts_block from "./Posting";
import p from '../../css/Posts.module.css';
import like from '../../img/like.png';


const Posts_Item = (props) => {
    return <div>
        <ul>
            <div>
                <li>
                    <div className={p.posts_block}> {props.posts} </div>
                    <div>
                        <img className={p.like} src={like} alt='like' />
                        <a>{props.likesCount} </a>
                    </div>
                </li>
            </div>
        </ul>
    </div >
}
export default Posts_Item;
