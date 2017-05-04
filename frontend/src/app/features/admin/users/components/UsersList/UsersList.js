import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as PATHS from 'routes/paths';

import Loader from 'core/components/Loader';
import Header from 'core/components/Header';
import EmptyLabel from 'core/components/EmptyLabel';
import ActionButton from 'core/components/ActionButton';
import DeleteButton from 'core/components/DeleteButton';

import { Table, TableHead, TableCell, TableRow } from 'react-toolbox/lib/table';
import FontIcon from 'react-toolbox/lib/font_icon';


const Icon = styled(FontIcon)`
  &&& {
    font-size: 1em;
  }
`;

const TopControls = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

class UsersList extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    isLoadingUsers: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,

  };
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers = (users) => {
    if (users.length) {
      const usersToRender = users.map(user =>
        <TableRow key={user.id}>
          <TableCell>
            {user.id}
          </TableCell>
          <TableCell>
            {`${user.first_name} ${user.last_name}`}
          </TableCell>
          <TableCell>
            {user.email}
          </TableCell>
          <TableCell>
            {user.admin ? 'Sí' : 'No'}
          </TableCell>
          <TableCell>
            {user.organization ? <Link to={PATHS.ADMIN_ORGANIZATIONS_PATH.url}>{user.organization.name}</Link> : 'Administrador'}
          </TableCell>
          <TableCell numeric>
            <DeleteButton action={() => console.log('LUL')} />
          </TableCell>
        </TableRow>);
      return (
        <Table selectable={false}>
          <TableHead>
            <TableCell><Icon value="format_list_numbered" /> ID</TableCell>
            <TableCell><Icon value="business" /> Nombre completo</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>Organización</TableCell>
          </TableHead>
          {usersToRender}
        </Table>);
    }
    return (<EmptyLabel>No existe ningún usuario</EmptyLabel>);
  };
  render() {
    const { users, isLoadingUsers } = this.props;
    return (
      <div>
        <TopControls>
          <Header>Usuarios</Header>
          <Link to={PATHS.ADMIN_NEW_USER_PATH.url}><ActionButton label="Nuevo usuario" /></Link>
        </TopControls>
        {!isLoadingUsers
          ? this.renderUsers(users)
          : <Loader />}
      </div>
    );
  }
}

export default UsersList;

