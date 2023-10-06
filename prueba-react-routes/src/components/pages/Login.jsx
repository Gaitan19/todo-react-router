import React from 'react'
import LoginC from '../LoginC'
import { TodoContext } from '../TodoContext'

const Login = () => {
  return (
  <TodoContext>
    <LoginC customClass='Login'></LoginC>
  </TodoContext>
  )
}

export default Login