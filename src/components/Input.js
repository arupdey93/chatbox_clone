import React from 'react';

class Input extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userData:''
    }
  }

  handleChange =(e) =>{
    this.setState({
      userData:e.target.value
    })
  }

  render(){
    return (
      <div className="input_data">
         <form onSubmit={()=>this.props.onSubmit(this.state.userData)}>
         <label>Name: </label>
         <input type='text' value={this.state.userData} onChange={this.handleChange}></input>
         <button className="btn">SUBMIT</button>
         </form>
      </div>
    )
  }
  
}

export default Input;