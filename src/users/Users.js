import React, { Component } from 'react';
import User from './User.js'

class Users extends Component {

  state = {
    title: 'User List',
    welcomeMessage: 'Welcome',
    users: [
      {name: 'Navnath3 Shendage', age: 30},
      {name: 'Navnath4 Shendage', age: 40}
    ]
  }

  decreaseOurAge = () => {
    const newState = this.state.users.map((user)=>{
      const tempUser = user
      tempUser.age = user.age - 1
      return tempUser
    })
    //this will change the existing values for the age of user
    this.setState({
      newState
    })
  }

  render(){
    return(
      <div>

        <h3>{this.state.title}</h3>
        <button onClick={this.decreaseOurAge}> Decrease Our Age </button>
        {
          this.state.users.map((user) => {
            return <User age={user.age}>{user.name} </User>
           }
          )
        }
      </div>
    )
  }
}

export default Users;
