import { connect } from 'react-redux';

import FacilitiesContent from 'components/FacilitiesContent';
import { fetchFacilities } from 'actions/user';

const mapStateToProps = state => ({
  facilities: state.user.facilities.facilities,
  isLoadingFacilities: state.user.facilities.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchFacilities: () => dispatch(fetchFacilities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FacilitiesContent);
