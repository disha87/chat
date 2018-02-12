import React from 'react';
import UserMessage from './UserMessage';

const ChatList = ({messages, onSend}) => {
    const userMessagesNodes = messages.map((msgObj, index) => {
        return (
            <UserMessage key={index} user={msgObj.user} message={msgObj.message} timestamp={msgObj.timestamp}/>
        );
    });
    
    return (
        <div className="chatList">
            {userMessagesNodes}
        </div>
    );
  
};

export default ChatList;