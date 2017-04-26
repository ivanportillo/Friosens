import { connect } from 'react-redux';

import FacilitiesContent from 'features/facilities/components/FacilitiesContent';
import { fetchFacilities } from 'features/facilities/actions';

const mapStateToProps = state => ({
  facilities: state.user.facilities.facilities,
  isLoadingFacilities: state.user.facilities.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchFacilities: () => dispatch(fetchFacilities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FacilitiesContent);
