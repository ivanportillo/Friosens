import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Loader from 'core/components/Loader';
import Header from 'core/components/Header';
import EmptyLabel from 'core/components/EmptyLabel';

import { Table, TableHead, TableCell, TableRow } from 'react-toolbox/lib/table';
import Button from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import * as PATHS from 'routes/paths';

const Icon = styled(FontIcon)`
  &&& {
    font-size: 1em;
  }
`;

class FacilitiesContent extends Component {
  static propTypes = {
    facilities: PropTypes.array.isRequired,
    fetchFacilities: PropTypes.func.isRequired,
    isLoadingFacilities: PropTypes.bool.isRequired,
  };
  componentWillMount() {
    this.props.fetchFacilities();
  }
  renderFacilities = (facilities) => {
    if (facilities.length) {
      const facilitiesToRender = facilities.map(facility =>
        <TableRow key={facility.id}>
          <TableCell>
            {facility.name}
          </TableCell>
          <TableCell>
            {facility.location}
          </TableCell>
          <TableCell numeric>
            <Link to={PATHS.UNITS_PATH.url.replace(':facilityId', facility.id)}><Button icon="chevron_right" ripple={false} /></Link>
          </TableCell>
        </TableRow>);
      return (
        <Table selectable={false}>
          <TableHead>
            <TableCell><Icon value="assignment" /> Nombre</TableCell>
            <TableCell><Icon value="place" /> Localización</TableCell>
          </TableHead>
          {facilitiesToRender}
        </Table>);
    }
    return (<EmptyLabel>No hay instalaciones</EmptyLabel>);
  };

  render() {
    const { facilities, isLoadingFacilities } = this.props;
    return (
      <div>
        <Header>Mis instalaciones</Header>
        {isLoadingFacilities ?
          <Loader />
          : this.renderFacilities(facilities)}
      </div>);
  }
}


export default FacilitiesContent;
