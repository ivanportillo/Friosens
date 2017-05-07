import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import CreateUnit from 'features/admin/units/components/CreateUnit';
import { fetchFacilities } from 'features/admin/facilities/actions';
import { createUnit } from 'features/admin/units/actions';

const validate = ({ name, location, facility_id, refrigerant }) => {
  const errors = {};
  if (!name) errors.name = 'El nombre es obligatorio';
  if (!location) errors.location = 'La localización es obligatoria';
  if (!facility_id) errors.facility_id = 'La instalación es obligatoria';
  if (!refrigerant) errors.refrigerant = 'El refrigerante es obligatorio';

  return errors;
};

const mapStateToProps = state => ({
  facilities: state.admin.facilities.facilities,
});

const mapDispatchToProps = dispatch => ({
  fetchFacilities: () => dispatch(fetchFacilities()),
  createUnit: ({
    name,
    location,
    refrigerant,
    mark,
    unit_model,
    serial_number,
    facility_id,
  }) => dispatch(createUnit({
    name,
    location,
    refrigerant,
    mark,
    unit_model,
    serial_number,
    facility_id,
  })),
});

const createForm = reduxForm({ form: 'createUnit', validate })(CreateUnit);

export default connect(mapStateToProps, mapDispatchToProps)(createForm);
