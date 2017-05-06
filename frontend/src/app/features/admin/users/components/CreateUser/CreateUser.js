/* eslint-disable react/require-default-props */
import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';

import Header from 'core/components/Header';
import FormInput from 'core/components/FormInput';
import Select from 'core/components/Select';
import ActionButton from 'core/components/ActionButton';
import FormTitle from 'core/components/FormTitle';
import Switch from 'core/components/Switch';
import FormLayout from 'core/components/FormLayout';
import FormContainer from 'core/components/FormContainer';
import InlineInputs from 'core/components/InlineInputs';

class CreateUser extends Component {
  componentWillMount() {
    this.props.fetchOrganizations();
  }

  render() {
    const {
      handleSubmit,
      createUser,
      organizations,
      disableOrganization,
      disableAdmin,
    } = this.props;
    return (
      <div>
        <Header>Crear un usuario</Header>
        <FormLayout>
          <FormContainer>
            <form onSubmit={handleSubmit(createUser)}>
              <FormTitle>Datos personales</FormTitle>
              <InlineInputs>
                <Field name="first_name" type="text" label="Nombre" width={'33%'} component={FormInput} />
                <Field name="last_name" type="text" label="Apellidos" width={'33%'} component={FormInput} />
                <Field name="telephone" type="text" label="Teléfono (opcional)" width={'33%'} component={FormInput} />
              </InlineInputs>
              <FormTitle>Datos de acceso</FormTitle>
              <InlineInputs>
                <Field name="email" type="text" label="Email" width={'49.7%'} component={FormInput} />
                <Field name="password" type="password" label="Contraseña" width={'49.7%'} component={FormInput} />
              </InlineInputs>
              <FormTitle>Organización del usuario</FormTitle>
              <InlineInputs>
                <Field
                  source={organizations.map(organization => ({
                    value: organization.id,
                    label: organization.name,
                  }))}
                  name="organization"
                  label="Organización"
                  component={Select}
                  disabled={disableOrganization}
                  width={'50%'}
                  allowBlank
                />
                <Field name="admin" disabled={disableAdmin !== undefined} label="Administrador" type="checkbox" component={Switch} />
              </InlineInputs>
              <ActionButton label="Crear" type="submit" />
            </form>
          </FormContainer>
        </FormLayout>
      </div>);
  }
}


CreateUser.propTypes = {
  createUser: PropTypes.func.isRequired,
  disableAdmin: PropTypes.number,
  disableOrganization: PropTypes.bool,
  fetchOrganizations: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  organizations: PropTypes.array.isRequired,
};

export default CreateUser;
