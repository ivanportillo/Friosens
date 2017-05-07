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

class UnitsList extends Component {
  static propTypes = {
    fetchUnits: PropTypes.func.isRequired,
    isLoadingUnits: PropTypes.bool.isRequired,
    removeUnit: PropTypes.func.isRequired,
    units: PropTypes.array.isRequired,
  };
  componentWillMount() {
    this.props.fetchUnits();
  }

  renderUnits = (units, removeUnit) => {
    if (units.length) {
      const unitsToRender = units.map(unit =>
        <TableRow key={unit.id}>
          <TableCell>
            {unit.id}
          </TableCell>
          <TableCell>
            {unit.name}
          </TableCell>
          <TableCell>
            {unit.location}
          </TableCell>
          <TableCell>
            {unit.refrigerant}
          </TableCell>
          <TableCell>
            {unit.unit_model}
          </TableCell>
          <TableCell>
            {unit.serial_number}
          </TableCell>
          <TableCell>
            Ver token
          </TableCell>
          <TableCell>
            <Link to={PATHS.ADMIN_FACILITIES_PATH.url}>{unit.facility.name}</Link>
          </TableCell>
          <TableCell numeric>
            <DeleteButton action={() => removeUnit(unit.id)} />
          </TableCell>
        </TableRow>);
      return (
        <Table selectable={false}>
          <TableHead>
            <TableCell><Icon value="format_list_numbered" /> ID</TableCell>
            <TableCell><Icon value="business" /> Nombre</TableCell>
            <TableCell>Localización</TableCell>
            <TableCell>Refrigerante</TableCell>
            <TableCell>Modelo</TableCell>
            <TableCell>Número de serie</TableCell>
            <TableCell>Token</TableCell>
            <TableCell>Instalación</TableCell>
          </TableHead>
          {unitsToRender}
        </Table>);
    }
    return (<EmptyLabel>No existe ninguna unidad</EmptyLabel>);
  };
  render() {
    const { units, isLoadingUnits, removeUnit } = this.props;
    return (
      <div>
        <TopControls>
          <Header>Unidades</Header>
          <Link to={PATHS.ADMIN_NEW_UNIT_PATH.url}><ActionButton label="Nueva unidad" /></Link>
        </TopControls>
        {!isLoadingUnits
          ? this.renderUnits(units, removeUnit)
          : <Loader />}
      </div>
    );
  }
}

export default UnitsList;
