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

class FacilitiesList extends Component {
  static propTypes = {
    facilities: PropTypes.array.isRequired,
    fetchFacilities: PropTypes.func.isRequired,
    isLoadingFacilities: PropTypes.bool.isRequired,
    removeFacility: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchFacilities();
  }

  renderFacilities = (facilities, removeFacility) => {
    if (facilities.length) {
      const facilitiesToRender = facilities.map(facility =>
        <TableRow key={facility.id}>
          <TableCell>
            {facility.id}
          </TableCell>
          <TableCell>
            {facility.name}
          </TableCell>
          <TableCell>
            {facility.location}
          </TableCell>
          <TableCell>
            <Link to={PATHS.ADMIN_ORGANIZATIONS_PATH.url}>{facility.organization.name}</Link>
          </TableCell>
          <TableCell numeric>
            <DeleteButton action={() => removeFacility(facility.id)} />
          </TableCell>
        </TableRow>);
      return (
        <Table selectable={false}>
          <TableHead>
            <TableCell><Icon value="format_list_numbered" /> ID</TableCell>
            <TableCell><Icon value="business" /> Nombre</TableCell>
            <TableCell>Localización</TableCell>
            <TableCell>Organización</TableCell>
          </TableHead>
          {facilitiesToRender}
        </Table>);
    }
    return (<EmptyLabel>No existe ninguna instalación</EmptyLabel>);
  };
  render() {
    const { facilities, isLoadingFacilities, removeFacility } = this.props;
    return (
      <div>
        <TopControls>
          <Header>Instalaciones</Header>
          <Link to={PATHS.ADMIN_NEW_FACILITY_PATH.url}><ActionButton label="Nueva instalación" /></Link>
        </TopControls>
        {!isLoadingFacilities
          ? this.renderFacilities(facilities, removeFacility)
          : <Loader />}
      </div>
    );
  }
}

export default FacilitiesList;
