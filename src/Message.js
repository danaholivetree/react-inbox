import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Message = ({msg, toggleRead, toggleSelect, toggleStar}) => {

  const handleReadClick = (e) => {
    e.preventDefault()
console.log('msg id msg.read? ', msg.id, msg.read);
    console.log('msg.id that was clicked on: ', msg.id);
    toggleRead(msg.id)
  }

  const handleSelectClick = (e) => {
    e.preventDefault()

    console.log('msg.id ', msg.id);
    toggleSelect(msg.id)
  }

  const handleStarClick = (e) => {
    e.preventDefault()

    console.log('msg.id ', msg.id);
    toggleStar(msg.id)
  }


  const isRead = msg.read ? "read" : "unread"
  const isSelected = msg.selected ? "selected" : ""
  const isStarred = msg.starred ? "fa-star" : "fa-star-o"

  return (
          <div className={"row message " + {isRead} + {isSelected}}  onClick={ handleReadClick }>
            <div className="col-xs-1">
              <div className="row">
                <div className="col-xs-2">
                  <input type="checkbox" onClick={ handleSelectClick }/>
                </div>
                <div className="col-xs-2">
                  <i  className={"star fa " + {isStarred}} onClick={ handleStarClick }></i>
                </div>
              </div>
            </div>
            <div className="col-xs-11">
              <a href="#">
                {msg.subject}
              </a>
            </div>
          </div>
        )

}

export default Message;
