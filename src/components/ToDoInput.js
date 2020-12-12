import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';
import { addToDo } from '../redux/actions/ToDoActions';

const ToDoInput = () => {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div className="col-md-6 mx-auto mt-5 pt-5">
    <InputGroup size="lg">
    
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" value={name} onChange={(e)=> setName(e.target.value)} placeholder="What's your next to do?" />
    <InputGroup.Prepend>
    <Button variant="outline-primary" className="ml-2"
        onClick={()=>{
            dispatch(addToDo({
                id: uuid(),
                name: name
            }));
            setName("");
        }}
    >Add to list</Button>
    </InputGroup.Prepend>
  </InputGroup>
        </div>
    );
};

export default ToDoInput;