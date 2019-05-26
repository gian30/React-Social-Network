import React from "react";
import c from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <NavLink to={/messages/ + props.id} className={c.dialog}>{props.name}</NavLink>
    );
}
const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    );
}

const Dialogs = props => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialog_items}>
                <DialogItem id="1" name="Alex" />
                <DialogItem id="2" name="Judith" />
                <DialogItem id="3" name="Robert" />
                <DialogItem id="4" name="Charles" />
                <DialogItem id="5 " name="Gian" />
            </div>
            <div className={c.messages}>
                <Message message="Hey!" />
                <Message message="How are you?" />
            </div>
        </div>
    );
};
export default Dialogs;
