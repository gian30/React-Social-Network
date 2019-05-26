import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return (
        <div className={c.post}>
            <div className={c.post_content}>
                <img src="https://img.elcomercio.pe/files/article_content_ec_fotos/uploads/2018/10/06/5bb8ce60353c5.jpeg" alt="" />
                <div className={c.post_text}>
                    <div className={c.post_title}>
                        {props.message}
                    </div>
                    <div className={c.post_name}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias minus provident odit in nobis quam a sequi animi eum reiciendis porro inventore accusamus obcaecati assumenda aperiam, fuga odio dignissimos tempore!
                </div>
             </div>
            </div>
            <div>
                <span>{props.likes} likes</span>
            </div>
        </div>
    );
}
export default Post;