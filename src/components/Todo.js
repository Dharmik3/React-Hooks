import React, { useContext } from 'react'
import Item from './Item'
import TodoInput from './TodoInput'
import ToDoContext from '../Context/Context'
const Todo = () => {
    const { todos, toggleTodo, deleteTodo } = useContext(ToDoContext)

    return (
        <div className='bg-slate-900 w-full h-[100vh] p-[40px]'>
            <TodoInput />
            {todos.map(todo =>
                <Item key={todo.id} text={todo.text} complete={todo.complete} clicktoToggle={() => toggleTodo(todo.id)} clicktoDelete={() => deleteTodo(todo.id)} />
            )}
        </div>
    )
}

export default Todo