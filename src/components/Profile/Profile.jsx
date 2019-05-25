import React from 'react';
import c from './Profile.module.css';

const Profile = () => {
    return (
        <div className={c.content}>
            <img src="http://www.limocart.com/img/banner_img1.jpg" alt="" />
            <div className={c.avatar}>
                <img src="" alt="" />
                ava + desc
            </div>
            <div className={c.posts}>
                my posts
                <div className={c.new_post}>
                </div>
                <div className={c.all_posts}>
                    <div className={c.post}></div>
                </div>
            </div>
        </div>
    );
}
export default Profile;