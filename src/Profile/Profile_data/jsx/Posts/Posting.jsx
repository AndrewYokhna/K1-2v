import React from "react";
import p from "../../css/Posting.module.css";

const Posting = (props) => {
    return <div className={p.item + ' ' + p.postsblock}>
        <div>
            <h3>My posts</h3>

        </div>
        <div>
            <div>
                <textarea className={p.textarea}> Post news...</textarea>
                <div>
                    <button className={p.button}>Post</button>
                </div>
            </div>
        </div>
    </div>
}
export default Posting;