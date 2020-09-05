import React, { Component } from "react"
import Message from "./Message"
import io from "socket.io-client"
import ChatBox from "./ChatBox"

class Dashboard extends Component {
  socket = {}
  constructor(props) {
    super(props)
    this.state = {
        messages: []
    }
    this.socket = io("http://localhost:4009", {
      query: `username=${props.username}`,
    })
    this.socket.on("server:message", (message) => {
      this.addMessage(message)
      // console.log(message)
    })
  }

  onSend = (text) => {
    const messageObject = {
      username: this.props.userName,
      message: text,
      fromMe: true,
    }

    this.socket.emit("client:message", messageObject)
    this.addMessage(messageObject)
  }

  addMessage = (messageObj) => {
    this.setState(prevState=>({
          messages:[...prevState.messages,messageObj]
    }))
  }

  render() {
    
    return (
      <div>
        <Message 
          messageSend={this.state.messages} />
        <ChatBox
          onSend={this.onSend}
        />
      </div>
    )
  }
}

export default Dashboard
