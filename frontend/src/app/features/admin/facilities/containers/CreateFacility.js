import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import CreateFacility from 'features/admin/facilities/components/CreateFacility';
import { fetchOrganizations } from 'features/admin/organizations/actions';
import { createFacility } from 'features/admin/facilities/actions';

const validate = ({ name, location, organization }) => {
  const errors = {};
  if (!name) errors.name = 'El nombre es obligatorio';
  if (!location) errors.location = 'La localización es obligatoria';
  if (!organization) errors.organization = 'La organización es obligatoria';
  return errors;
};

const mapStateToProps = state => ({
  organizations: state.admin.organizations.organizations,
});

const mapDispatchToProps = dispatch => ({
  fetchOrganizations: () => dispatch(fetchOrganizations()),
  createFacility: ({ name, location, organization }) => dispatch(createFacility({
    name,
    location,
    organization_id: organization,
  })),
});

const createForm = reduxForm({ form: 'createFacility', validate })(CreateFacility);

export default connect(mapStateToProps, mapDispatchToProps)(createForm);
