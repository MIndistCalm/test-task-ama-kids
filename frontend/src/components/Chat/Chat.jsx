import React from 'react';

import Messagelist from "./MessageList";
import Title from "./Title";
import Sendmessageform from "../UI/SendMessageForm";

import ChatStyle from "../../styles/Chat/Chat.module.css"

const Chat = () => {
    return (
        <div className={ChatStyle.chat}>
            <Title />
            <Messagelist />
            <Sendmessageform />
        </div>
    );
}

export default Chat;
