import React from 'react';
import './App.css';

const Message = ({msg, toggleRead, toggleSelect, toggleStar, markOneRead}) => {

  const handleReadClick = (e) => {
    // e.preventDefault()
    console.log('msg that was clicked on ', msg)
    markOneRead(msg)

  }

  const handleSelectClick = (e) => {
    toggleSelect(msg)
  }

  const handleStarClick = (e) => {
    e.preventDefault()
    toggleStar(msg)
  }


  const isRead = msg.read ? "read" : "unread"
  const isSelected = msg.selected ? "selected" : ""
  const isStarred = msg.starred ? "fa-star" : "fa-star-o"
  const isChecked = msg.selected ? "checked" : ""
  const devLabel = ((msg.labels).filter( label => label==='dev')).length
  const personalLabel = ((msg.labels).filter( label => label==='personal')).length
  const gSchoolLabel = ((msg.labels).filter( label => label==='gSchool')).length

  return (
          <div className={"row message " + isRead + ' ' + isSelected} >
            <div className="col-xs-1">
              <div className="row">
                <div className="col-xs-2">
                  <input type="checkbox" onChange={ handleSelectClick } checked={isChecked}/>
                </div>
                <div className="col-xs-2">
                  <i className={"star fa " + isStarred} onClick={ handleStarClick }></i>
                </div>
              </div>
            </div>
            <div className="col-xs-11" onClick={ handleReadClick }>
            {devLabel ? <span className="label label-warning">dev</span> : ''}
            {personalLabel ? <span className="label label-warning">personal</span> : ''}
            {gSchoolLabel ? <span className="label label-warning">gSchool</span> : ''}

                {msg.subject}

            </div>

          </div>
        )

}

export default Message;
