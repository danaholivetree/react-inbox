import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let showBody = false

const Message = ({msg, toggleRead, toggleSelect, toggleStar, markRead}) => {



  const handleReadClick = (e) => {
    e.preventDefault()
    console.log('read click on message ', msg.id);
    markRead(msg.id)
    showBody = !showBody
    console.log('showBody now ',showBody);

  }

  const handleSelectClick = (e) => {
    e.preventDefault()
      console.log('select click on message ', msg.id);
    toggleSelect(msg.id)
  }

  const handleStarClick = (e) => {
    e.preventDefault()
      console.log('star click on message ', msg.id);
    toggleStar(msg.id)
  }


  const isRead = msg.read ? "read" : "unread"
  const isSelected = msg.selected ? "selected" : ""
  const isStarred = msg.starred ? "fa-star" : "fa-star-o"
  const isHidden = showBody ? " " : "hidden"
  const devLabel = ((msg.labels).filter( label => label=='dev')).length
  const personalLabel = ((msg.labels).filter( label => label=='personal')).length
  console.log(isRead +' '+ isSelected +' '+ isStarred + ' ' +isHidden)

  return (
          <div className={"row message " + (msg.read ? "read " : "unread ") + (msg.selected ? "selected " : " ")} >
            <div className="col-xs-1">
              <div className="row">
                <div className="col-xs-2">
                  <input type="checkbox" onClick={ handleSelectClick }/>
                </div>
                <div className="col-xs-2">
                  <i className={"star fa " + (msg.starred ? "fa-star" : "fa-star-o")} onClick={ handleStarClick }></i>
                </div>
              </div>
            </div>
            <div className="col-xs-11" onClick={ handleReadClick }>
            {devLabel ? <span class="label label-warning">dev</span> : ''}
            {personalLabel ? <span class="label label-warning">personal</span> : ''}
              <a href="#">
                {msg.subject}
              </a>
            </div>
              <div className={"row message-body " +(showBody ? " " : "hidden")} >
                <div className="col-xs-11 col-xs-offset-1">
                  This is the body of the message.
                </div>
              </div>
          </div>
        )

}

export default Message;
