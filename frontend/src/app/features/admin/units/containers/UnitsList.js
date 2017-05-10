import { connect } from 'react-redux';

import UnitsList from 'features/admin/units/components/UnitsList';
import { removeUnit, fetchUnits } from 'features/admin/units/actions';
import { openTokenDialog, closeTokenDialog } from 'features/layout/actions';

const mapStateToProps = state => ({
  units: state.admin.units.units,
  isLoadingUnits: state.admin.units.isLoading,
  isOpenDialog: state.ui.tokenDialog,
});

const mapDispatchToProps = dispatch => ({
  fetchUnits: () => dispatch(fetchUnits()),
  removeUnit: unitId => dispatch(removeUnit(unitId)),
  openTokenDialog: () => dispatch(openTokenDialog()),
  closeTokenDialog: () => dispatch(closeTokenDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitsList);
