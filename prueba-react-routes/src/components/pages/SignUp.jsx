import React from 'react'
import SignUpC from '../SignUpC'
import { TodoContext } from '../TodoContext'

const SignUp = () => {
  return (
  <TodoContext>
    <SignUpC customClass='To-do-list'></SignUpC>
  </TodoContext>
  )
}

export default SignUp