import React from 'react';
import './App.css';

const Toolbar = ({messages, calculateUnread, selectAll, deleteSelected, markSelectedRead, markSelectedUnread, addLabel, removeLabel, toggleCompose}) => {


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

const disabled = messages.every( (msg) => {
  return !msg.selected ? 'disabled' : ''
})

const calculateSelected = messages.filter( (msg) => {
    return msg.selected
    })

const selectAllIcon =
  calculateSelected.length === messages.length ? <i className="fa fa-check-square-o"/> :
  calculateSelected.length === 0 ? <i className="fa fa-square-o"/> :
  <i className="fa fa-minus-square-o"/>

const handleAddLabel = (e) => {
  e.preventDefault()
  addLabel(e.target.value)
}

const handleRemoveLabel = (e) => {
  e.preventDefault()
  removeLabel(e.target.value)
}
  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{unreadCount.length}</span>
          unread messages
        </p>

        <a className="btn btn-danger" onClick={toggleCompose}>
          <i className="fa fa-plus" id='compose'></i>
        </a>

        <button className="btn btn-default" onClick={selectAll} >
          {selectAllIcon}
        </button>

        <button className="btn btn-default" disabled={disabled} onClick={handleMarkAsRead}>
          Mark As Read
        </button>

        <button className="btn btn-default" disabled={disabled} onClick={handleMarkAsUnread}>
          Mark As Unread
        </button>

        <select className="form-control label-select" onChange={handleAddLabel} disabled={disabled}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" onChange={handleRemoveLabel} disabled={disabled}>
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
