import React from 'react';
import style from './Login.css';

import Input from 'react-toolbox/lib/input';
import inputTheme from './input.css';
import Button from 'react-toolbox/lib/button';
import buttonTheme from './button.css';

const Login = ({ email, password }) =>
  <div className={style.layout}>
    <div className={style.loginBox}>
      <h1>FrioSens</h1>
      <Input type="text" value={email} label="E-mail" theme={inputTheme} />
      <Input type="password" value={password} theme={inputTheme} label="Contraseña" />
      <Button label="Entrar" theme={buttonTheme} raised primary ripple={false} />
    </div>
  </div>;

export default Login;