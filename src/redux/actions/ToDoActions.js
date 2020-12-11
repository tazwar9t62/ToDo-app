export const ADD_TO_DO = 'ADD_TO_DO';
export const DELETE_TO_DO = 'DELETE_TO_DO';
export const UPDATE_TO_DO = 'UPDATE_TO_DO';


export function addToDo(todo){
    return{
        type: 'ADD_TO_DO',
        payload: todo
    }
}

export function deleteToDo(todoID){
    return{
        type: 'DELETE_TO_DO',
        payload: todoID
    }
}

export function updateToDo(todo){
    return{
        type: 'UPDATE_TO_DO',
        payload: todo
    }
}