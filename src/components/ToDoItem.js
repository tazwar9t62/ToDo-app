import React from 'react';
import { Button } from 'react-bootstrap';

const ToDoItem = () => {
    return (
        <div class="col-md-6 mx-auto text-center mt-5">
            <div  className="row mt-3">
                <div className="mx-3">Number.</div>
                <div className="mx-3">Item Title</div>
                <Button className="mx-3" variant="outline-warning">Edit</Button>
                <Button className="mx-3"variant="outline-success">Done</Button>
            </div>
        </div>
    );
};

export default ToDoItem;