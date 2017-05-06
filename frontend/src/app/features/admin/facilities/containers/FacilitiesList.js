import { connect } from 'react-redux';

import FacilitiesList from 'features/admin/facilities/components/FacilitiesList';

import { fetchFacilities, removeFacility } from 'features/admin/facilities/actions';

const mapStateToProps = state => ({
  facilities: state.admin.facilities.facilities,
  isLoadingFacilities: state.admin.facilities.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchFacilities: () => dispatch(fetchFacilities()),
  removeFacility: facilityId => dispatch(removeFacility(facilityId)),
 });

export default connect(mapStateToProps, mapDispatchToProps)(FacilitiesList);
