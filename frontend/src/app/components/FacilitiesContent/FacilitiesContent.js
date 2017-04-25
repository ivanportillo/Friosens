import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import { Table, TableHead, TableCell, TableRow } from 'react-toolbox/lib/table';
import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import FontIcon from 'react-toolbox/lib/font_icon';
import styled from 'styled-components';

import * as PATHS from '../../routes/paths';

const Header = styled.div`
  font-size: 1.5em;
  font-style: normal;
  font-weight: normal;
  padding-bottom: 1em;
`;

const Icon = styled(FontIcon)`
  &&& {
    font-size: 1em;
  }
`;

const EmptyLabel = styled.label`
  margin: 1em;
  padding: 0.5em;
  color: white;
  background-color: #8ac148;
  border-radius: 5px;
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
          <ProgressBar type="circular" mode="indeterminate" />
          : this.renderFacilities(facilities)}
      </div>);
  }
}


export default FacilitiesContent;
