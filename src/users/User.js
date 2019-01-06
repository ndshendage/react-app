import React from 'react';

const User = (props) => {
  console.log(props)
  return(
    <div>
      <h3>Name: {props.children}</h3>
      <h5>Age: {props.age}</h5>
    </div>
  )
}

export default User;
