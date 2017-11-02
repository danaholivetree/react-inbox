import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message'
import App from './App'

const Messages = ({allmsgs}) => {
  console.log('allmsgs coming into Messages ', allmsgs)
    return (
      <div className='collection'>
        {allmsgs.map( (message) =>
          <Message msg={message} key={message.id} />
          )
        }
      </div>
    )

}

export default Messages;
