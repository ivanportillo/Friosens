import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import { createUser } from 'features/admin/users/actions';
import { fetchOrganizations } from 'features/admin/organizations/actions';

import CreateUser from 'features/admin/users/components/CreateUser';

const validate = ({ first_name, last_name, email, password }) => {
  const errors = {};
  if (!first_name) errors.first_name = 'El nombre es obligatorio';
  if (!last_name) errors.last_name = 'Los apellidos son obligatorios';
  if (!email) errors.email = 'El email es obligatorio';
  if (!password) errors.password = 'Debes introducir una contraseña';
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) errors.email = 'Email no valido';
  return errors;
};


const mapStateToProps = state => ({
  organizations: state.admin.organizations.organizations,
  disableOrganization: formValueSelector('createUser')(state, 'admin'),
  disableAdmin: formValueSelector('createUser')(state, 'organization'),
});

const mapDispatchToProps = dispatch => ({
  createUser: ({ first_name, last_name, telephone, email, password, organization, admin }) =>
    dispatch(
      createUser({
        first_name,
        last_name,
        telephone,
        email,
        password,
        organization_id: organization,
        admin
      }),
    ),
  fetchOrganizations: () => dispatch(fetchOrganizations()),
});

const createForm = reduxForm({ form: 'createUser', validate })(CreateUser);

export default connect(mapStateToProps, mapDispatchToProps)(createForm);

