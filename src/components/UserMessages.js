import React from 'react';
import UserMessage from './UserMessage';
import SendMessage from './SendMessage';

const UserMessages = ({messages, onSend}) => {
    const userMessagesNodes = messages.map((msgObj, index) => {
        console.log(index%2 === 0);
        return (
          (index%2 !== 0)
            ? (<UserMessage cssClass="grey" key={index} user={msgObj.user} message={msgObj.message} timestamp={msgObj.timestamp}/>)
            : (<UserMessage key={index} user={msgObj.user} message={msgObj.message} timestamp={msgObj.timestamp}/>)
        );
    });
    
    return (
        <div className="userMessagesContainer">
          <div className="userMessages">
            {userMessagesNodes}
          </div>
          <SendMessage onSend={onSend}/>
        </div>
    );
  
};

export default UserMessages;