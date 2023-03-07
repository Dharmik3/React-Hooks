import React from 'react'


const Item = ({ text, complete, clicktoToggle, clicktoDelete }) => {
    return (
        <div>
            <div className='text-white text-xl mb-2 md:flex justify-between'>
                <h3 className='md:text-2xl text-xl'>{text}</h3>
                <span>{complete ? <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={clicktoToggle}>Completed</button> : <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={clicktoToggle}>Not Completed</button>}<button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={clicktoDelete}>Delete</button></span>
            </div>
           
            <hr className='mb-2'/>
        </div>
    )
}

export default Item