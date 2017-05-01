import { connect } from 'react-redux';

import OrganizationsList from 'features/admin/organizations/components/OrganizationsList';
import { fetchOrganizations, removeOrganization } from 'features/admin/organizations/actions';

const mapStateToProps = state => ({
  organizations: state.admin.organizations.organizations,
  isLoadingOrganizations: state.admin.organizations.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchOrganizations: () => dispatch(fetchOrganizations()),
  removeOrganization: organizationId => dispatch(removeOrganization(organizationId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationsList);

