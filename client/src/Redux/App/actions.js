import { ADD_TODO, GET_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO, GET_SELECTED_TODO, COMPLETED_TODOS, TOTAL_TODOS } from "./actionType";
// import axios from "axios";


export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const getTodo = (payload) => {
    return {
        type: GET_TODO,
        payload
    }
}

export const getSelectedTodo = (payload) => {
    return {
        type: GET_SELECTED_TODO,
        payload,
    };
};

export const toggleTodo = (payload) => {
    return {
        type: TOGGLE_TODO,
        payload
    }
}
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}
export const editTodo = (payload) => {
    return {
        type: EDIT_TODO,
        payload
    }
}

export const completedTodos = () => {
    return {
        type: COMPLETED_TODOS,
    };
};

export const totalTodos = () => {
    return {
        type: TOTAL_TODOS,
    };
};



