import { ADD_TODO, GET_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO, GET_SELECTED_TODO, COMPLETED_TODOS, TOTAL_TODOS } from './actionType'
import { saveData, loadData } from '../../Utils/localStorage'

const initState = {
    // todo: [],
    todo: loadData("redux_todos") || [],
    todoItem: { title: "", status: "" },
    total: 0,
    completed: 0,
}

export const appReducer = (state = initState, { type, payload }) => {
    // console.log('state:', state, type, payload)

    switch (type) {
        case ADD_TODO:
            const updateData = [...state.todo, payload]
            saveData("redux_todos", updateData)
            return {
                ...state,
                todo: updateData
            }
        case GET_TODO:
            return {
                ...state,
                todo: payload
            }
        case GET_SELECTED_TODO:
            return {
                ...state,
                todoItem: payload
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todoItem: payload
            }
        case EDIT_TODO:
            return {
                ...state,
                todoItem: payload
            }
        case DELETE_TODO:
            return {
                ...state,
                todoItem: payload
            }
        case COMPLETED_TODOS: {
            let total = 0;
            state.todo.map((el) => (el.status === true ? total++ : total));
            return {
                ...state,
                completed: total,
            };
        }
        case TOTAL_TODOS: {
            return {
                ...state,
                total: state.todo.length,
            };
        }
        default: return state
    }
}