import React from 'react';

class Message extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props.messageSend)
      return (
        <div className="sender">
         <h2 className="title">Messages to display</h2>
         {this.props.messageSend.map((item,index)=>
           (item.fromMe) ? (<div key={index} className="para_sender">{item.message} {item.username}</div>) :
             (<div key={index} className="para_receiver">{item.message} {item.username}</div>)
         )}
        </div>
      )   
    }
  }

export default Message;