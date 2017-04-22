import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Button from 'react-toolbox/lib/button';

import { Field } from 'redux-form';
import LoginInput from './LoginInput';

const LoggingLabel = styled.label`
  margin: 1em;
  padding: 0.5em;
  color: white;
  background-color: #8ac148;
  border-radius: 5px;
`;

const ErrorLabel = styled.label`
  margin: 1em;
  padding: 0.5em;
  color: white;
  background-color: #ff1744;
  border-radius: 5px;
`;

const LoginBox = styled.div`
  background-color: white;
  padding: 2em;
  width: 30em;
  border-radius: 3px;
`;

const LoginLayout = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #1675d1;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled(Button)`
  &&& {
    background: #ffa000;
    color: white;
  }
`;

const Login = ({ login, handleSubmit, isLogging, loginError }) =>
  <LoginLayout>
    <LoginBox>
      <h1>FrioSens</h1>
      <form onSubmit={handleSubmit(login)}>
        <Field name="email" type="text" label="E-mail" component={LoginInput} />
        <Field name="password" type="password" label="Contraseña" component={LoginInput} />
        <SubmitButton type="submit" label="Entrar" ripple={false} />
        {isLogging && <LoggingLabel htmlFor="error">Iniciando sesión...</LoggingLabel>}
        {loginError && <ErrorLabel htmlFor="error">{loginError}</ErrorLabel> }
      </form>
    </LoginBox>
  </LoginLayout>;

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLogging: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  loginError: PropTypes.string,
};

Login.defaultProps = {
  loginError: '',
};


export default Login;
