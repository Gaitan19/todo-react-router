import React from 'react'
import { TodoContext } from '../TodoContext'
import Todo from '../Todo'

const Home = () => {
  return (
    <TodoContext>
        <Todo customClass='To-do-list'></Todo>
    </TodoContext>
  )
}

export default Home