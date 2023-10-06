import PropTypes from 'prop-types';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import Form from '../Form';
import FormTitle from '../FormTitle';
import Input from '../Input';
import Button from '../Button';
import { handleLogin } from '../../services/user';
import { contextTodo } from '../TodoContext';
import { alertMessage } from '../Alert';
import routes from '../../constants/routes';

const LoginC = (props) => {
  const { customClass, format } = props;
  const { setUser, validateIfUserIsLogin } = useContext(contextTodo);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    validateIfUserIsLogin(user);
  }, []);

  const handleSubmit = async (e) => {

    try {

      e.preventDefault();

      const credentials = {
        email,
        password,
      };

      const { data, status } = await handleLogin(credentials);

      if (status === 200) {
        
        const { name, token, id } = data;
     

        alertMessage.success('Login successfully');
        setUser({ name, token, id });


        setTimeout(() => {

          router(routes.todo);
        }, 2000);

      } else {


        alertMessage.error('Failed to login');
      }
    } catch ({ response: { data: { message } = {} } = {} }) {
      alertMessage.error(message);
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangepassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Form
      customClass={customClass}
      imageUrl="/logo-smbs.png"
      imageDescription="logo-smbs"
      onSubmit={handleSubmit}
    >
      <FormTitle
        customClass="Login-title"
        formatText="Format"
        title="WELCOME TO THE TODO APP"
      />

      <Input
        customClass="Input-container"
        text="Email Address"
        placeholder="Email Address"
        type="email"
        onChange={handleChangeEmail}
      />

      <Input
        customClass="Input-container"
        text="Password"
        placeholder="************"
        type="password"
        onChange={handleChangepassword}
      />

      <Button customClass="Button" buttonText="Login" buttonType="submit" />
      <h2 className="Format-text Format-link">
        Don&#39;t have an account?
        <Link
          to={routes.signUp}
          className={`${format}-text ${format}-link ${format}-button`}
        >
          Sign Up here!
        </Link>
      </h2>
    </Form>
  );
};

LoginC.propTypes = {
  customClass: PropTypes.string.isRequired,
  format: PropTypes.string,
};

LoginC.defaultProps = {
  format: 'Format',
};

export default LoginC;
