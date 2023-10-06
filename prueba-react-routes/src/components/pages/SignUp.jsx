import React from 'react'
import SignUpC from '../SignUpC'
import { TodoContext } from '../TodoContext'

const SignUp = () => {
  return (
  <TodoContext>
    <SignUpC customClass='SignMe'></SignUpC>
  </TodoContext>
  )
}

export default SignUp