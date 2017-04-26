import { connect } from 'react-redux';

import UnitContent from 'features/unit/components/UnitContent';
import { fetchAlarms } from 'features/unit/actions';

const mapStateToProps = (state, ownProps) => ({
  alarms: state.user.unit.alarms[ownProps.match.params.unitId]
      ? state.user.unit.alarms[ownProps.match.params.unitId] : [],
  facilityId: ownProps.match.params.facilityId,
  unitId: ownProps.match.params.unitId,
  isLoadingAlarms: state.user.unit.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchAlarms: (unitId, limit) => dispatch(fetchAlarms(unitId, limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitContent);
