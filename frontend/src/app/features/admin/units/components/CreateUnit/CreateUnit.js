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

const types = [
  { value: 'R22', label: 'R22' },
  { value: 'R407C', label: 'R407C' },
  { value: 'R410A', label: 'R410A' },
];

class CreateUnit extends Component {
  static propTypes = {
    createUnit: PropTypes.func.isRequired,
    facilities: PropTypes.array.isRequired,
    fetchFacilities: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.fetchFacilities();
  }

  render() {
    const { handleSubmit, createUnit, facilities } = this.props;
    return (
      <div>
        <Header>Crear una unidad</Header>
        <FormLayout>
          <FormContainer>
            <form onSubmit={handleSubmit(createUnit)}>
              <FormTitle>Identificación</FormTitle>
              <InlineInputs>
                <Field name="name" type="text" label="Nombre" width={'49.6%'} component={FormInput} />
                <Field name="location" type="text" label="Localización" width={'49.6%'} component={FormInput} />
              </InlineInputs>
              <FormTitle>Datos de la unidad</FormTitle>
              <InlineInputs>
                <Field name="mark" type="text" label="Marca (Opcional)" width={'33%'} component={FormInput} />
                <Field name="unit_model" type="text" label="Modelo (Opcional)" width={'33%'} component={FormInput} />
                <Field name="serial_number" type="text" label="Número de serie (Opcional)" width={'33%'} component={FormInput} />
              </InlineInputs>
              <InlineInputs>
                <Field
                  source={facilities.map(facility => ({
                    value: facility.id,
                    label: facility.name,
                  }))}
                  name="facility_id"
                  label="Instalación"
                  component={Select}
                  width={'49.6%'}
                  allowBlank
                />
                <Field
                  source={types}
                  name="refrigerant"
                  label="Refrigerante"
                  component={Select}
                  width={'49.6%'}
                  allowBlank
                />
              </InlineInputs>
              <ActionButton label="Crear" type="submit" />
            </form>
          </FormContainer>
        </FormLayout>
      </div>
    );
  }
}

export default CreateUnit;
