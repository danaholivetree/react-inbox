import React, { Component } from 'react';
import './App.css';

const Toolbar = ({unreadMessages}) => {

console.log(unreadMessages);
  const handleClick = (e) => {
    console.log(e.target.id)
    if (e.target.id === 'compose') {
      console.log('should show compose component');
    }
  }

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{unreadMessages}</span>
          unread messages
        </p>

        <a className="btn btn-danger">
          <i className="fa fa-plus" id='compose'></i>
        </a>

        <button className="btn btn-default" >
          <i className="fa fa-square-o"></i>
          <i className="fa fa-minus-square-o"></i>
          <i className="fa fa-check-square-o"></i>
        </button>

        <button className="btn btn-default" disabled="disabled">
          Mark As Read
        </button>

        <button className="btn btn-default" disabled="disabled">
          Mark As Unread
        </button>

        <select className="form-control label-select" disabled="disabled">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" disabled="disabled">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" disabled="disabled">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>

    );
}


export default Toolbar;
