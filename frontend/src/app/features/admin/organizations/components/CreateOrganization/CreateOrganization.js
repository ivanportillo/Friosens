import React, { PropTypes } from 'react';
import { Field } from 'redux-form';

import Header from 'core/components/Header';
import FormInput from 'core/components/FormInput';
import Select from 'core/components/Select';
import ActionButton from 'core/components/ActionButton';

const types = [
  { value: 'company', label: 'Compañía' },
  { value: 'freelance', label: 'Autónomo' },
  { value: 'particular', label: 'Particular' },
];

const CreateOrganization = ({ handleSubmit, createOrganization }) =>
  <div>
    <Header>Crear una organización</Header>
    <form onSubmit={handleSubmit(createOrganization)}>
      <Field name="name" type="text" label="Nombre" component={FormInput} />
      <Field
        source={types}
        name="orgType"
        label="Tipo de organización"
        component={Select}
        allowBlank
      />
      <ActionButton label="Crear" type="submit" />
    </form>
  </div>;

CreateOrganization.propTypes = {
  createOrganization: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CreateOrganization;
