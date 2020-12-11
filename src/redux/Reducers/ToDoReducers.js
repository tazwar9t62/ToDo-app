import { ADD_TO_DO, DELETE_TO_DO, UPDATE_TO_DO } from "../actions/ToDoActions";
import { ToDos } from "../states/ToDoStates";

export let ToDoReducers = (state=ToDos, action) =>{
    switch (action.type){
        case ADD_TO_DO:
            break;
        case DELETE_TO_DO:
            break;
        case UPDATE_TO_DO:
            break;
        default:
            return state;
    }
}