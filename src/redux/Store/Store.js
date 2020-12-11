const { createStore } = require("redux");
const { ToDoReducers } = require("../Reducers/ToDoReducers");

export let store = createStore(ToDoReducers);