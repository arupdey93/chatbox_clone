import React from 'react';

class ChatBox extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      message:''
    }
  }
  
  fetchMessage=(e)=>{
    this.setState({
      message:e.target.value
    })
  }

  render(){
    return (
      <div className="chat_box">
        <div className="title">
          <h2>This is ChatBox</h2>
        </div>
        <div className="input_data">
          <input type="text" value={this.state.message} onChange={this.fetchMessage} placeholder="Type here"></input>
          <button className="btn" onClick={()=>{this.props.onSend(this.state.message)}}>SEND</button>
        </div>
      </div>
    )
  }
}

export default ChatBox;