import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../redux/actions/ToDoActions';

const ToDoItem = ({ToDo}) => {
    let {id , name} = ToDo;
    // console.log(ToDo);
    let dispatch = useDispatch();
    return (
        <div class="col-md-6 mx-auto text-center mt-5">
            <div  className="row mt-3 justify-content-between align-items-center">
                <div className="row">
                <div className="mx-3">
                    <h5>{id.length > 1 ? id[2]: id}.</h5>
                    </div>
                <div>
                    <h5>{name}</h5>
                    </div>
                </div>
                <div>
                <Button className="mx-1" variant="outline-warning">Edit</Button>
                <Button className="mx-1"variant="outline-success" 
                    onClick={()=> dispatch(deleteToDo(id))}
                >Done</Button>
                </div>
            </div>
        </div>
    );
};

export default ToDoItem;