import React from 'react';
import ToDoInput from '../components/ToDoInput';
import ToDoList from '../components/ToDoList';

const Home = () => {
    return (
        <div>
            <ToDoInput/>
            <ToDoList/>
        </div>
    );
};

export default Home;