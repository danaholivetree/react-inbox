import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message'


const Messages = ({messages, toggleStar, toggleSelect, toggleRead}) => {
    return (
      <div className='collection'>
        {messages.map( (message) =>
          <Message msg={message}  key={message.id} toggleStar={toggleStar} toggleSelect={toggleSelect} toggleRead={toggleRead} />
          )
        }
      </div>
    )

}

export default Messages;
