import React from 'react';
import Dashboard from './Dashboard'
import Input from './Input'

class Home extends React.Component{
  constructor(){
    super()
    this.state = {
      userName:'',
      submit:false
    }
  }

  onSubmit = (item)=>{   
    if(item !== ''){
      this.setState({
        userName:item,
        submit:true
      })
    }
  }

  render(){
    if(!this.state.submit){
      return (
        <div className="container">
          <div className="title">
            <h2>This is Home</h2>
          </div>
          <div className="input_box">
            <Input onSubmit={this.onSubmit}/>
          </div>
        </div>
      )
    }else{
      return (
        <div>
          <Dashboard userName={this.state.userName} />
        </div>
      )
    }
  }
  
}

export default Home;