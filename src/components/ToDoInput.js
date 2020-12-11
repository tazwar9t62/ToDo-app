import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const ToDoInput = () => {
    return (
        <div className="col-md-6 mx-auto mt-5 pt-5">
    <InputGroup size="lg">
    
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <InputGroup.Prepend>
    <Button variant="outline-primary" className="ml-2">Add to list</Button>
    </InputGroup.Prepend>
  </InputGroup>
        </div>
    );
};

export default ToDoInput;