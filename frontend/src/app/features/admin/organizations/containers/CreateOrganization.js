import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { createOrganization } from 'features/admin/organizations/actions';

import CreateOrganization from 'features/admin/organizations/components/CreateOrganization';

const validate = ({ name, orgType }) => {
  const errors = {};
  if (!name) errors.name = 'El nombre es obligatorio';
  if (!orgType) errors.orgType = 'Es obligatorio el tipo de organización';
  return errors;
};

const mapDispatchToProps = dispatch => ({
  createOrganization: ({ name, orgType }) => dispatch(createOrganization(name, orgType)),
});

const createForm = reduxForm({ form: 'createOrganization', validate })(CreateOrganization);

export default connect(null, mapDispatchToProps)(createForm);
