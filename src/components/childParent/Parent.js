import React from 'react';
import Child from './Child';

const Parent = (props) => {
  return(
    <Child {...props} btnName='Parent Tempered'/>
  )
}

export default Parent;
