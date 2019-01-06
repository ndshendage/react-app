import React from 'react';

const Child = (props) => {
  console.log(props);
  return(
    <div>
      <button onClick={props.changeBtnNameTitle}> {props.btnName}</button>
      <button onClick={props.changeBtnNameTitle}> {props.title}</button>
    </div>
  )
}

export default Child;
