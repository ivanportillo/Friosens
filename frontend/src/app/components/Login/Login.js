import React from 'react';

import { Field } from 'redux-form';
import LoginInput from './LoginInput';

import Button from 'react-toolbox/lib/button';
import buttonTheme from './button.css';

import style from './Login.css';

const Login = ({ login, handleSubmit, isLogging, loginError }) =>
  <div className={style.layout}>
    <div className={style.loginBox}>
      <h1>FrioSens</h1>
      <form onSubmit={handleSubmit(login)}>
        <Field name="email" type="text" label="E-mail" component={LoginInput} />
        <Field name="password" type="password" label="Contraseña" component={LoginInput} />
        <Button type="submit" label="Entrar" theme={buttonTheme} raised primary ripple={false} />
        {isLogging && <label className={style.loading} htmlFor="error">Iniciando sesión...</label>}
        {loginError && <label className={style.error} htmlFor="error">{loginError}</label> }
      </form>
    </div>
  </div>;

export default Login;