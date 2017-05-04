import { connect } from 'react-redux';

import { fetchUsers, removeUser } from 'features/admin/users/actions';
import UsersList from 'features/admin/users/components/UsersList';

const mapStateToProps = state => ({
  users: state.admin.users.users,
  isLoadingUsers: state.admin.users.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  removeUser: userId => dispatch(removeUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
