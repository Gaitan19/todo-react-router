import PropTypes from 'prop-types';
import { useContext } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { contextTodo } from '../TodoContext';
import { handleLogout } from '../../services/user';
import { alertMessage } from '../Alert';
import routes from '../../constants/routes';
import { CContainer, CNavbar} from '@coreui/react';

const Navbar = (props) => {
  const { customClass } = props;
  const { theme, user, setUser } = useContext(contextTodo);
  const router = useNavigate();
  const containerTheme = theme === 'dark' && 'dark-mode-container';
  const textTheme = theme === 'dark' && 'dark-mode-text';

  const handleOnClick = async () => {
    try {
      const { status } = await handleLogout(user.token);
      if (status === 200) {
        alertMessage.success('Log Out successfully');
        setUser({});

        setTimeout(() => {
          router(routes.login);
        }, 500);
      } else {
        alertMessage.error('Log Out unsuccess');
      }
    } catch ({ response: { data: { message } = {} } = {} }) {
      alertMessage.error(message);
    }
  };

  return (
    <CNavbar
      colorScheme="light"
      className={`bg-light ${customClass} ${customClass}-header ${containerTheme}`}
    >
      <CContainer fluid>
        <ul className={`${customClass}-menu`}>
          <li className={`${customClass}-menu-text ${textTheme}`}>
            {user.name}
          </li>
          <li className={`${customClass}-menu-text`}>
            <Button
              customClass={`${customClass}-logout ${textTheme}`}
              buttonText="Logout"
              onClick={handleOnClick}
              buttonColor="string"
            />
          </li>
        </ul>
      </CContainer>
    </CNavbar>
  );
};

Navbar.propTypes = {
  customClass: PropTypes.string.isRequired,
};

export default Navbar;
