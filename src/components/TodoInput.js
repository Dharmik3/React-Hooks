import React, { useState, useContext } from 'react'
import ToDoContext from '../Context/Context'

const TodoInput = () => {
    const { todos, addTodo } = useContext(ToDoContext);
    const [text, setText] = useState("")
    const handleAddTask = (e) => {
        e.preventDefault();
        if (text == "") {
            alert('Please write task!')
        }
        else {
            const newTodo = {
                id: Date.now(),
                text,
                complete: false
            }
            addTodo(newTodo);
            setText("");
        }
    }
    return (
        <div>

            <div class="mb-6">

                <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-3xl" name="text"
                    placeholder='Add task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyUp={(e) => {
                        if (e.keyCode === 13) {
                            handleAddTask(e)
                        }
                    }}
                />
            </div>
            <div className='flex justify-center content-center'>
                <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " onClick={handleAddTask}
                    
                >Add Task</button>
            </div>
        </div>
    )
}

export default TodoInput