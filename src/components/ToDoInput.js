import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const ToDoInput = () => {
    return (
        <div className="col-md-6 mx-auto mt-5 pt-5">
    <InputGroup size="lg">
    
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">Add to list</InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>
        </div>
    );
};

export default ToDoInput;