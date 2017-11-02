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
    this.id = msg.id
  }

  handleClick = (e) => {
    e.preventDefault()
    alert(`${e.target.id}`)
    if (e.target.id == 'star') {
      this.state.starred == true ? this.setState({starred: false}) : this.setState({starred: true})
    }
  }

  render () {
    return (
            <div className={"row message " + (this.state.read ? "read" : "unread") + (this.state.selected ? " selected" : "")} onClick={ this.handleClick }>
              <div className="col-xs-1">
                <div className="row">
                  <div className="col-xs-2">
                    <input type="checkbox" id="selector"/>
                  </div>
                  <div className="col-xs-2">
                    <i id='star' className={"star fa " + (this.state.starred ? "fa-star" : "fa-star-o")}></i>
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
