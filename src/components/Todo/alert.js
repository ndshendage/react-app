import React from 'react';
import { Alert } from 'react-bootstrap';


const AlertMessage = (props) => {
    console.log(props);
	return(
        <div>
          <Alert variant={props.variant}>
		    {props.message}
		  </Alert>
        </div>
		)
}

export default AlertMessage;