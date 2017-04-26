import { connect } from 'react-redux';

import UnitsContent from 'features/units/components/UnitsContent';
import { fetchUnits } from 'features/units/actions';

const mapStateToProps = (state, ownProps) => ({
  units:
    state.user.units.units[ownProps.match.params.facilityId] ?
      state.user.units.units[ownProps.match.params.facilityId] : [],
  isLoadingUnits: state.user.units.isLoading,
  facilityId: ownProps.match.params.facilityId,
});

const mapDispatchToProps = dispatch => ({
  fetchUnits: facilityId => dispatch(fetchUnits(facilityId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitsContent);
