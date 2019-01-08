functional component and react component =>

1) functional => do not extend from the React Component.
  does not have render method.
  does not have any state.
  can get the properties form the parent that are in the props.

  Simply =>
    const User = (props) => {
      return (
        <div>
          <h4> Functional Component</h4>
          <h4> Title from Parent : {props.title}</h4>
        </div>
      )
    }
  export default User;

1) React =>extend from the React Component.
  has render method.
  has any state.
  can set the properties using state.
  update the state using function named setState({
    stateName: stateValue;
    })

  Simply =>
    class User extends React.Component {
      render(){
        return (
          <div>
            <h4> Functional Component</h4>
            <h4> Title from Parent : {props.title}</h4>
          </div>
        )
      }
    }

    export default User;

  ## setting thestate =>
  state = {
    title: 'User List',
    welcomeMessage: 'Welcome',
    users: [
      {name: 'Navnath3 Shendage', age: 30},
      {name: 'Navnath4 Shendage', age: 40}
    ]
  }

  ## updating the state and handling the clicks thats callbacks

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



 *************** BINDING THE EVENTS TO THE BUTTON CLICKS ***************
#i think bind is the best thing to be used so will be going with bind only
 <button onClick={this.changeWelcomeMessage1}> CWM Normal</button>
 <button onClick={() => this.changeWelcomeMessage("Welcome To SIG, Mumbai")}> CWM Anonymous</button>
 <button onClick={this.changeWelcomeMessage.bind(this, "Welcome To SIG, Banglore")}> CWM Binding</button>
 <br/>
 <h6> Welcome Message : <input type='text' onChange={this.changeWM} value={this.state.welcomeMessage}/> </h6>
