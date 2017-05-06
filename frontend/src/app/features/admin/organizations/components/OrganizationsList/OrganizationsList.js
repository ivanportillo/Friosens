import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as PATHS from 'routes/paths';

import Loader from 'core/components/Loader';
import Header from 'core/components/Header';
import EmptyLabel from 'core/components/EmptyLabel';
import ActionButton from 'core/components/ActionButton';
import DeleteButton from 'core/components/DeleteButton';
import TopControls from 'core/components/TopControls';

import { Table, TableHead, TableCell, TableRow } from 'react-toolbox/lib/table';
import FontIcon from 'react-toolbox/lib/font_icon';


const Icon = styled(FontIcon)`
  &&& {
    font-size: 1em;
  }
`;

class OrganizationsList extends Component {
  static propTypes = {
    fetchOrganizations: PropTypes.func.isRequired,
    isLoadingOrganizations: PropTypes.bool.isRequired,
    organizations: PropTypes.array.isRequired,
    removeOrganization: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchOrganizations();
  }
  renderOrganizations = (organizations, removeOrganization) => {
    if (organizations.length) {
      const organizationsToRender = organizations.map(organization =>
        <TableRow key={organization.id}>
          <TableCell>
            {organization.id}
          </TableCell>
          <TableCell>
            {organization.name}
          </TableCell>
          <TableCell>
            {organization.type}
          </TableCell>
          <TableCell numeric>
            <DeleteButton action={() => removeOrganization(organization.id)} />
          </TableCell>
        </TableRow>);
      return (
        <Table selectable={false}>
          <TableHead>
            <TableCell><Icon value="format_list_numbered" /> ID</TableCell>
            <TableCell><Icon value="business" /> Nombre</TableCell>
            <TableCell>Tipo</TableCell>
          </TableHead>
          {organizationsToRender}
        </Table>);
    }
    return (<EmptyLabel>No existe ninguna organización</EmptyLabel>);
  };

  render() {
    const { organizations, isLoadingOrganizations, removeOrganization } = this.props;
    return (
      <div>
        <TopControls>
          <Header>Organizaciones</Header>
          <Link to={PATHS.ADMIN_NEW_ORGANIZATION_PATH.url}><ActionButton label="Nueva organización" /></Link>
        </TopControls>
        {!isLoadingOrganizations
          ? this.renderOrganizations(organizations, removeOrganization)
          : <Loader />}
      </div>
    );
  }
}


export default OrganizationsList;
