import React, { Component } from 'react';
import '../css/chatApp.css';
import UserMessages from './UserMessages';
import ChatList from './ChatList';

class ChatApp extends Component {
  constructor(props) {
      super(props);
      this.onSendHandler = this.onSendHandler.bind(this);
  };

  onSendHandler() {
      console.log("on send clicked");
  };

  render() {
    const chatMessages = [
      {"user": "disha", "message": "hello world", "timestamp": "Feb 11, 11:56pm"},
      {"user": "jinal", "message": "hello di", "timestamp": "Feb 11, 11:58pm"},
      {"user": "disha", "message": "hello jinal", "timestamp": "Feb 11, 11:59pm"},
      {"user": "jinal", "message": "wassup", "timestamp": "Feb 12, 12:58am"}
    ]
    return (
      <div className="chatApp">
        <div className="header">header</div>
        <div className="sideNav">sideNav</div>
        <div className="chatWindow">
          <ChatList messages={chatMessages} />
          <UserMessages messages={chatMessages} onSend={this.onSendHandler} />
        </div>
      </div>
    );
  }
}

export default ChatApp;
