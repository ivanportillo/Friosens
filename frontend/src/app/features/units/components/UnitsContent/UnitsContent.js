import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Table, TableHead, TableCell, TableRow } from 'react-toolbox/lib/table';
import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import FontIcon from 'react-toolbox/lib/font_icon';
import styled from 'styled-components';

import * as PATHS from 'routes/paths';

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

class UnitsContent extends Component {
  componentWillMount() {
    this.props.fetchUnits(this.props.facilityId);
  }
  renderUnits = (units) => {
    if (units.length) {
      const unitsToRender = units.map(unit =>
        <TableRow key={unit.id}>
          <TableCell>
            {unit.name}
          </TableCell>
          <TableCell>
            {unit.location}
          </TableCell>
          <TableCell>
            {unit.mark}
          </TableCell>
          <TableCell>
            {unit.unit_model}
          </TableCell>
          <TableCell numeric>
            <Link to={PATHS.UNIT_PATH.url.replace(':facilityId', unit.facility_id).replace(':unitId', unit.id)}><Button icon="chevron_right" ripple={false} /></Link>
          </TableCell>
        </TableRow>);
      return (
        <Table selectable={false}>
          <TableHead>
            <TableCell><Icon value="assignment" /> Nombre</TableCell>
            <TableCell><Icon value="place" /> Localización</TableCell>
            <TableCell>Marca</TableCell>
            <TableCell>Modelo</TableCell>
          </TableHead>
          {unitsToRender}
        </Table>);
    }
    return (<EmptyLabel>No hay unidades en esta instalación</EmptyLabel>);
  };

  render() {
    const { units, isLoadingUnits } = this.props;
    return (
      <div>
        <Header>Unidades de la instalación</Header>
        {isLoadingUnits ?
          <ProgressBar type="circular" mode="indeterminate" />
          : this.renderUnits(units)}
      </div>);
  }
}

export default UnitsContent;
