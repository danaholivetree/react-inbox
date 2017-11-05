import React from 'react';
import './App.css';

const Toolbar = ({calculateSelected, calculateUnread, selectAll, deleteSelected, markSelectedRead, markSelectedUnread}) => {


const handleMarkAsRead = (e) => {
  e.preventDefault()
   markSelectedRead()
}

const handleMarkAsUnread = (e) => {
  e.preventDefault()
   markSelectedUnread()
}

const unreadCount = calculateUnread().length
console.log('unreadCount ', unreadCount);

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{unreadCount}</span>
          unread messages
        </p>

        <a className="btn btn-danger">
          <i className="fa fa-plus" id='compose'></i>
        </a>

        <button className="btn btn-default" >

        </button>

        <button className="btn btn-default" disabled="" onClick="handleMarkAsRead">
          Mark As Read
        </button>

        <button className="btn btn-default" disabled="" onClick="handleMarkAsUnread">
          Mark As Unread
        </button>

        <select className="form-control label-select" disabled="">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" disabled="">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" disabled="">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>

    );
}


export default Toolbar;
