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
    id -= 1
    let msg = this.state.messages[id]
    this.setState({
      messages: [...this.state.messages.splice(0,id), {...msg, starred: !msg.starred}, ...this.state.messages.splice(id+1)
      ]
    })

  }

  toggleSelect = (id) => {
    id -= 1
    let msg = this.state.messages[id]
    this.setState({
      messages: [
        ...this.state.messages.splice(0,id),
        {...msg, selected: !msg.selected},
      ...this.state.messages.splice(id)
      ]
    })

  }

  markOneRead = (id) => {
    id -= 1
    let msg = this.state.messages[id]
    this.setState({
      messages: [
        ...this.state.messages.splice(0, id),
        {...msg, read: true},
        ...this.state.messages.splice(id)
      ]
    })
  }

  markSelectedRead = () => {
    this.setState({
      messages: this.state.messages.map( (msg) => {
        msg.selected && !msg.read ? {...msg, read:true} : msg
      })
    })
  }

  markSelectedUnread = () => {
    return this.setState({
      messages: this.state.messages.map( (msg) => {
        msg.selected && msg.read ? {...msg, read:false} : msg
      })
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
        <Toolbar calculateSelected={this.calculateSelected} calculateUnread = {this.calculateUnread} selectAll={this.selectAll} markSelectedRead={this.markSelectedRead} markSelectedUnread={this.markSelectedUnread} deleteSelected={this.deleteSelected} messages={this.state.messages}/>

        <Messages messages={this.state.messages} toggleStar = {this.toggleStar} toggleSelect={this.toggleSelect} toggleRead = {this.toggleRead} markOneRead = {this.markOneRead}/>
      </div>
    );
  }
}

export default App;
