import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar'
import Messages from './Messages'
import Compose from './Compose'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {messages: []}
  }

  async componentDidMount() {
    const response = await this.request(`/api/messages`)
    const json = await response.json()
    this.setState({messages: json._embedded.messages})
  }

  async request(path, method = 'GET', body = null) {
    if (body) {
      body = JSON.stringify(body)
    }

    return await fetch(`http://localhost:8082${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body
    })
  }

  async update(payload) {
    await this.request('/api/messages', 'PATCH', payload)
  }


  async toggleStar(msg) {
    let id = this.state.messages.indexOf(msg)
    await this.update({
      "messageIds": [ msg.id ],
      "command": "star",
      "star": msg.starred
    })

    this.setState({
      messages: [
        ...this.state.messages.slice(0,id),
        {...msg, starred: !msg.starred},
        ...this.state.messages.slice(id+1)
      ]
    })
  }

  toggleSelect = (id) => {
    id -= 1
    let msg = this.state.messages[id]
    this.setState({
      messages: [
        ...this.state.messages.slice(0, id),
        {...msg, selected: !msg.selected},
        ...this.state.messages.slice(id+1)
      ]
    })
  }

  markOneRead = (id) => {
    id -= 1
    let msg = this.state.messages[id]
    this.setState({
      messages: [
        ...this.state.messages.slice(0, id),
        {...msg, read: true},
        ...this.state.messages.slice(id+1)
      ]
    })
  }

  markSelectedRead = () => {
    this.setState({
      messages: this.state.messages.map( (msg) => {
        return msg.selected && !msg.read ? {...msg, read:true} : msg
      })
    })
  }

  markSelectedUnread = () => {
    this.setState({
      messages: this.state.messages.map( (msg) => {
        return msg.selected && msg.read ? {...msg, read:false} : msg
      })
    })
  }

  calculateUnread = () => {
    this.state.messages.filter( (msg) => {
       return !msg.read
    })
  }

  selectAll = () => {
    const sel = this.state.messages.filter(msg => msg.selected)
    const notAllSel = sel.length < this.state.messages.length
      this.setState({
        messages: this.state.messages.map(msg => (
            notAllSel ? { ...msg, selected:true } : { ...msg, selected:false }
          ))
        })
      }

  deleteSelected = () => {
      const messages = this.state.messages.filter(message => !message.selected)
       this.setState({ messages })
  }

  addLabel = (value) => {
    let messages = this.state.messages.map(msg => (
      msg.selected && !msg.labels.includes(value) ?
        { ...msg, labels: [...msg.labels, value].sort() } :
        msg
    ))
    this.setState({ messages })
  }

  removeLabel = (value) => {
    let messages = this.state.messages.map(msg => {
      let i = msg.labels.indexOf(value)
      if (msg.selected && i !== -1) {
        return {
          ...msg,
          labels: [
            ...msg.labels.slice(0, i),
            ...msg.labels.slice(i + 1)
          ]
        }
      }
      return msg
    })
    this.setState({ messages })
  }

  toggleCompose = () => {
    this.setState({composing: !this.state.composing || true})
    console.log("this.state.composing ", this.state.composing)
  }

  async send(content)  {
    await this.request('/api/messages', 'POST', content)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-Inbox</h1>
        </header>
        <Toolbar  calculateUnread = {this.calculateUnread} selectAll={this.selectAll} markSelectedRead={this.markSelectedRead} markSelectedUnread={this.markSelectedUnread} deleteSelected={this.deleteSelected} addLabel={this.addLabel} removeLabel={this.removeLabel} toggleCompose={this.toggleCompose}  messages={this.state.messages}/>

        {this.state.composing ?
          <Compose submit={ this.submit } send={this.send}/> :
          null
        }

        <Messages messages={this.state.messages} toggleStar = {this.toggleStar.bind(this)} toggleSelect={this.toggleSelect} toggleRead = {this.toggleRead} markOneRead = {this.markOneRead}/>
      </div>
    );
  }
}

export default App;
