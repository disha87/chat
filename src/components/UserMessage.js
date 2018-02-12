import React from 'react';

const UserMessage = ({user, message, timestamp, cssClass}) => {
    return (
        <div className={"userMessage " + cssClass}>
          <div className="msgItems">
            <div className="user">{user}</div>
            <div className="timestamp">{timestamp}</div>
          </div>
          <div className="message">{message}</div>
        </div>
    );
};

export default UserMessage;