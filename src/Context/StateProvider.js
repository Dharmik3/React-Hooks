import React, { useReducer } from "react";
import TodoContext from "./Context";
import reducer from "./reducer";
import { initialState } from "./initialState";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionType";

const StateProvider = (props) => {


    const [state, dispatch] = useReducer(reducer, initialState);

    // Add todo
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo,
        });
    };

    // Toggle a todo
    const toggleTodo = (todoID) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: todoID,
        });
    };

    // Delete a todo
    const deleteTodo = (todoID) => {
        dispatch({
            type: DELETE_TODO,
            payload: todoID,
        });
    };

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                addTodo,
                toggleTodo,
                deleteTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default StateProvider;