import React from 'react';
import './App.css';
import Message from './Message'


const Messages = ({messages, toggleStar, toggleSelect, toggleRead, markOneRead}) => {

  const sendMessages = messages.map( (message) =>
    <Message key={message.id} msg={message}  toggleStar={toggleStar} toggleSelect={toggleSelect} toggleRead={toggleRead} markOneRead={markOneRead} />
    )

    return (
      <div className='collection' >
        {sendMessages}
      </div>
    )

}

export default Messages;
