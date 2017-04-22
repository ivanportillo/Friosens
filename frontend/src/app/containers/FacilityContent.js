import { connect } from 'react-redux';

import FacilityContent from 'components/FacilityContent';
import { fetchFacilities } from 'actions/user';

const mapStateToProps = state => ({
  facilities: state.user.facilities,
  isLoadingFacilities: state.user.isLoadingFacilities,
});

const mapDispatchToProps = dispatch => ({
  fetchFacilities: () => dispatch(fetchFacilities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FacilityContent);
