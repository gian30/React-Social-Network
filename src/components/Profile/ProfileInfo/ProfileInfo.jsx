import React from 'react';
import c from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <img className={c.banner} src="http://www.limocart.com/img/banner_img1.jpg" alt="" />
            <div className={c.avatar}>
                <img src="https://img.elcomercio.pe/files/article_content_ec_fotos/uploads/2018/10/06/5bb8ce60353c5.jpeg" alt="" />
            </div>
        </div>
    );
}

export default ProfileInfo;
