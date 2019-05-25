import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={c.posts}>
            my posts
            <div className={c.new_post}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={c.all_posts}>
                <Post message="postname1" likes="20"/>
                <Post message="postname2" likes="26"/>
                <Post message="poooost" likes="42"/>
                <Post message="holaaa" likes="96"/>
                <Post message="que tal" likes="0"/>
            </div>
        </div>
    );
}
export default MyPosts;