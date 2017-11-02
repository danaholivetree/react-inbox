import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Message extends Component {
  constructor({msg}) {
    super({msg})
    this.state = {
      read: msg.read,
      starred: msg.starred,
      selected: msg.selected,
      labels: msg.labels
    }
    this.subject = msg.subject
  }

  render () {
    return (
            <div className={"row message" + (this.state.read ? 'read' : 'unread')}>
              <div className="col-xs-1">
                <div className="row">
                  <div className="col-xs-2">
                    <input type="checkbox" />
                  </div>
                  <div className="col-xs-2">
                    <i className="star fa fa-star-o"></i>
                  </div>
                </div>
              </div>
              <div className="col-xs-11">
                <a href="#">
                  {this.subject}
                </a>
              </div>
            </div>
          )
    }
}

export default Message;
