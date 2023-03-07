import React, { Suspense } from 'react'
import './App.css'
import Todo from './Todo'
import StateProvider from '../Context/StateProvider'
const UseRef = React.lazy(
  () => import('./UseRef')
)
const Test = React.lazy(
  () => import('./Test')
)

const App = () => {
  return (
    <div>
      {/* <UseRef />
      <Suspense fallback={<div>Loading....</div>}>
    </Suspense> */}
      <StateProvider>
        <Todo />
      </StateProvider>
    </div>
  )
}

export default App