import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import routes from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import useLocalStorage from '../../hooks/useLocalStorage';
import { alertMessage } from '../Alert';

const contextTodo = createContext();

const TodoContext = (props) => {
  const { children } = props;
  const [todo, setTodo] = useState([]);
  const [theme, setTheme] = useLocalStorage('theme');
  const [user, setUser] = useLocalStorage('user', {});
  const router = useNavigate();
  const location = useLocation();

  const validateIfUserIsLogin = (isUser) => {
    const isLoggedIn = Object.keys(isUser).length > 0 && isUser.token;
    if (isLoggedIn) {
      router(routes.todo);
    } else {
      if (location.pathname === routes.signUp) {
        // alertMessage.success(location.pathname)

        setTimeout(() => {

          router(routes.signUp);
        }, 1000);

      } else {

        // alertMessage.success(location.pathname)

        setTimeout(() => {

          router(routes.login);
        }, 1000);
        
      }
    }

    return isLoggedIn;
  };

  return (
    <contextTodo.Provider
      value={{
        theme,
        setTheme,
        todo,
        setTodo,
        user,
        setUser,
        validateIfUserIsLogin,
      }}
    >
      {children}
    </contextTodo.Provider>
  );
};

TodoContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoContext, contextTodo };
