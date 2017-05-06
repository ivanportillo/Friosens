import React, { PropTypes } from 'react';
import { Field } from 'redux-form';

import Header from 'core/components/Header';
import FormInput from 'core/components/FormInput';
import Select from 'core/components/Select';
import ActionButton from 'core/components/ActionButton';
import FormLayout from 'core/components/FormLayout';
import FormContainer from 'core/components/FormContainer';
import InlineInputs from 'core/components/InlineInputs';

const types = [
  { value: 'company', label: 'Compañía' },
  { value: 'freelance', label: 'Autónomo' },
  { value: 'particular', label: 'Particular' },
];

const CreateOrganization = ({ handleSubmit, createOrganization }) =>
  <div>
    <Header>Crear una organización</Header>
    <FormLayout>
      <FormContainer>
        <form onSubmit={handleSubmit(createOrganization)}>
          <InlineInputs>
            <Field name="name" type="text" label="Nombre" width={'49.6%'} component={FormInput} />
            <Field
              source={types}
              name="orgType"
              label="Tipo de organización"
              component={Select}
              width={'49.6%'}
              allowBlank
            />
          </InlineInputs>
          <ActionButton label="Crear" type="submit" />
        </form>
      </FormContainer>
    </FormLayout>
  </div>;

CreateOrganization.propTypes = {
  createOrganization: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CreateOrganization;
