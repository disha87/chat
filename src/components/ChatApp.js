import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/chatApp.css';

class App extends Component {
  render() {
    return (
      <div className="chatApp">
        <div className="header">header</div>
        <div className="sideNav">sideNav</div>
        <div className="chatWindow">
          <div className="chatList">chatList</div>
          <div className="userMessages">
            <div className="userMessageContainer">
              <div className="userMessage">userMessage</div>
              <div className="userMessage">userMessage</div>
              <div className="userMessage">userMessage</div>
            </div>  
            <div className="sendMessage">sendMessage</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
