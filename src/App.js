import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar'
import Messages from './Messages'

const messages = [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {messages}
  }

  toggleStar = (id) => {
    let msg = (this.state.messages.slice(id-1, id))[0]
    msg.starred = !msg.starred
    this.setState({
      messages: [...this.state.messages, msg]
    })

  }

  toggleSelect = (id) => {
    let msg = (this.state.messages.slice(id-1, id))[0]
    msg.selected = !msg.selected
    this.setState({
      messages: [...this.state.messages, msg]
    })

  }

  markOneRead = (id) => {
    let msg = (this.state.messages.slice(id-1, id))[0]
    msg.read = true
    this.setState({
      messages: [...this.state.messages, msg]
    })
  }

  markSelectedRead = () => {
    let msgs = this.state.messages.filter( (msg) => {
      return msg.selected === true
    })
    let readMsgs = msgs.map((msg) => {
      return msg.read = true
    })
    this.setState({
      messages: [...this.state.messages, readMsgs]
    })
  }

  markSelectedUnread = () => {
    let msgs = this.state.messages.filter( (msg) => {
      return msg.selected === true
    })
    let unreadMsgs = msgs.map((msg) => {
      return msg.read = false
    })
    this.setState({
      messages: [...this.state.messages, unreadMsgs]
    })
  }

  calculateSelected = () => {
    let sel = this.state.messages.filter( (msg) => {
      return msg.selected === true
    })
    return sel.length
  }

  calculateUnread = () => {
    let unreadTotal = this.state.messages.filter( (msg) => {
       return msg.read === false
    })
    return unreadTotal
  }

  selectAll = () => {
    const selAll = (this.state.messages).map( (msg) => {
      return msg.selected=true
    })
     this.setState({
      messages: [...this.state.messages, selAll]
    })
  }

  deleteSelected = () => {
      const messages = this.state.messages.filter(message => !message.selected)
       this.setState({ messages })
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-Inbox</h1>
        </header>
        <Toolbar calculateSelected={this.calculateSelected} calculateUnread = {this.calculateUnread} selectAll={this.selectAll} markSelectedRead={this.markSelectedRead} markSelectedUnread={this.markSelectedUnread} deleteSelected={this.deleteSelected}/>

        <Messages messages={this.state.messages} toggleStar = {this.toggleStar} toggleSelect={this.toggleSelect} toggleRead = {this.toggleRead} markOneRead = {this.markOneRead}/>
      </div>
    );
  }
}

export default App;
