import { connect } from 'react-redux';

import UnitContent from 'components/UnitContent';
import { fetchAlarms } from 'actions/user';

const mapStateToProps = (state, ownProps) => ({
  alarms: state.user.alarms.alarms[ownProps.match.params.unitId]
      ? state.user.alarms.alarms[ownProps.match.params.unitId] : [],
  facilityId: ownProps.match.params.facilityId,
  unitId: ownProps.match.params.unitId,
});

const mapDispatchToProps = dispatch => ({
  fetchAlarms: (unitId, limit) => dispatch(fetchAlarms(unitId, limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitContent);
