import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return (
        <div className={c.post}>
            <img src="https://img.elcomercio.pe/files/article_content_ec_fotos/uploads/2018/10/06/5bb8ce60353c5.jpeg" alt="" />
            {props.message}
            <div>
                <span>{props.likes} likes</span>
            </div>
        </div>
    );
}
export default Post;