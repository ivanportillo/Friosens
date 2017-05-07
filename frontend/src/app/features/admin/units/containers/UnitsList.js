import { connect } from 'react-redux';

import UnitsList from 'features/admin/units/components/UnitsList';
import { removeUnit, fetchUnits } from 'features/admin/units/actions';

const mapStateToProps = state => ({
  units: state.admin.units.units,
  isLoadingUnits: state.admin.units.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchUnits: () => dispatch(fetchUnits()),
  removeUnit: unitId => dispatch(removeUnit(unitId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitsList);
