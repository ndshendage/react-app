import React, { Component} from 'react';

class Binding extends Component {
  state = {
    welcomeMessage: 'Welcome To SIS, Jhazzar, Haryana'
  }

  changeWelcomeMessage = (message) =>{
    console.log('will change the welcome message');
    if(message){
      message = message
    }else{
      message = 'Welcome To SIS, Jhazzar, Delhi'
    }
    this.setState({welcomeMessage: message})
  }

  changeWelcomeMessage1 = () =>{
    console.log('will change the welcome message');
    this.setState({welcomeMessage: 'Welcome To SIS, Jhazzar, Delhi'})
  }

  changeWM = (event) => {
    this.setState({welcomeMessage: event.target.value})
  }
  render(){
    return(
      <div>
        <h5>
           Welcome Message : {this.state.welcomeMessage}
        </h5>
        <button onClick={this.changeWelcomeMessage1}> CWM Normal</button>
        <button onClick={() => this.changeWelcomeMessage("Welcome To SIG, Mumbai")}> CWM Anonymous</button>
        <button onClick={this.changeWelcomeMessage.bind(this, "Welcome To SIG, Banglore")}> CWM Binding</button>
        <br/>
        <h6> Welcome Message : <input type='text' onChange={this.changeWM} value={this.state.welcomeMessage}/> </h6>
      </div>
    )
  }
}

export default Binding;
