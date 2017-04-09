import { connect } from 'react-redux';
import Login from 'components/Login';
import { reduxForm } from 'redux-form';
import { login } from 'actions/auth';

const validateForm = ({ email, password }) => {
  const errors = {};
  if(!email) errors.email = 'Es necesario introducir email';
  if(!password) errors.password = 'Es necesario introducir contraseña';
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) errors.email = 'Email no valido';

  return errors;
};

const mapStateToProps = state => ({
  isLogging: state.auth.isLogging,
  loginError: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  login: ({ email, password }) => dispatch(login(email, password)),
});

const LoginForm = reduxForm({ form: 'login', validate: validateForm })(Login);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);


