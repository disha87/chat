import React from 'react';

const SendMessage = ({onSend}) => {
    return (
        <div className="sendMessage">
          <input type="text" className="msgTxt" />
          <input type="submit" className="sendBtn" onClick={onSend} value="Send"/>
        </div>
    );
};

export default SendMessage;