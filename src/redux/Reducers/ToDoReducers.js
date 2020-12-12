import { ADD_TO_DO, DELETE_TO_DO, UPDATE_TO_DO } from "../actions/ToDoActions";
import { ToDos } from "../states/ToDoStates";

export let ToDoReducers = (state=ToDos, action) =>{
    let newToDos;
    // eslint-disable-next-line default-case
    switch (action.type){
        case ADD_TO_DO:
            newToDos = [...state];
            newToDos.push(action.payload);
            return newToDos;
        case DELETE_TO_DO:
            newToDos = [...state];
            newToDos = newToDos.filter(toDo => toDo.id !== action.payload);
            return newToDos;
        case UPDATE_TO_DO:
            break;
    }
    return state;
}