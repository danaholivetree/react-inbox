import React from 'react';
import './App.css';

const Toolbar = ({messages, calculateSelected, calculateUnread, selectAll, deleteSelected, markSelectedRead, markSelectedUnread}) => {


const handleMarkAsRead = (e) => {
  e.preventDefault()
  markSelectedRead()
}

const handleMarkAsUnread = (e) => {
  e.preventDefault()
  markSelectedUnread()
}

const unreadCount = messages.filter( (msg) => {
  return !msg.read
})

const disabled = messages.filter( (msg) => {
  return msg.selected }) ? '' : 'disabled'

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{unreadCount.length}</span>
          unread messages
        </p>

        <a className="btn btn-danger">
          <i className="fa fa-plus" id='compose'></i>
        </a>

        <button className="btn btn-default" >

        </button>

        <button className="btn btn-default" disabled={disabled} onClick={handleMarkAsRead}>
          Mark As Read
        </button>

        <button className="btn btn-default" disabled={disabled} onClick={handleMarkAsUnread}>
          Mark As Unread
        </button>

        <select className="form-control label-select" disabled={disabled}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" disabled={disabled}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" disabled={disabled}>
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>

    );
}


export default Toolbar;
