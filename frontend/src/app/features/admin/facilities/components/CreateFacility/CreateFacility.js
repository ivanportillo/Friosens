import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';

import Header from 'core/components/Header';
import FormInput from 'core/components/FormInput';
import Select from 'core/components/Select';
import ActionButton from 'core/components/ActionButton';
import FormTitle from 'core/components/FormTitle';
import FormLayout from 'core/components/FormLayout';
import FormContainer from 'core/components/FormContainer';
import InlineInputs from 'core/components/InlineInputs';

class CreateFacility extends Component {
  static propTypes = {
    createFacility: PropTypes.func.isRequired,
    fetchOrganizations: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    organizations: PropTypes.array.isRequired,
  };
  componentWillMount() {
    this.props.fetchOrganizations();
  }

  render() {
    const { handleSubmit, createFacility, organizations } = this.props;
    return (
      <div>
        <Header>Crear una instalación</Header>
        <FormLayout>
          <FormContainer>
            <form onSubmit={handleSubmit(createFacility)}>
              <FormTitle>Datos de la instalación</FormTitle>
              <InlineInputs>
                <Field name="name" type="text" label="Nombre" width={'49.7%'} component={FormInput} />
                <Field name="location" type="text" label="Localización" width={'49.7%'} component={FormInput} />
              </InlineInputs>
              <Field
                source={organizations.map(organization => ({
                  value: organization.id,
                  label: organization.name,
                }))}
                name="organization"
                label="Organización"
                component={Select}
                allowBlank
              />
              <ActionButton label="Crear" type="submit" />
            </form>
          </FormContainer>
        </FormLayout>
      </div>
    );
  }
}

export default CreateFacility;
