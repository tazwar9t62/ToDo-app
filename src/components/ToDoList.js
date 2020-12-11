import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';


const ToDoList = () => {
    let ToDos = useSelector(state => state);
    // console.log(ToDos);
    return (
        <div className="px-3">
            {
                ToDos.map(ToDo => {
                    return <ToDoItem key={ToDo.id} ToDo={ToDo} />
                })
            }
        </div>
    );
};

export default ToDoList;