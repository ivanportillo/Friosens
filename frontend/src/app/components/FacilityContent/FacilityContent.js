import React from 'react';
import { Table, TableHead, TableCell, TableRow } from 'react-toolbox/lib/table';
import Button from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import style from './FacilityContent.css';

const facilities = [
  { name: 'Instalación 1', location: 'Localización 1' },
  { name: 'Instalación 2', location: 'Localización 2' },
  { name: 'Instalación 3', location: 'Localización 3' },
  { name: 'Instalación 4', location: 'Localización 4' },
  { name: 'Instalación 5', location: 'Localización 5' },
];

const FacilityContent = () =>
  <div className={style.content}>
    <h1 className={style.header}>Mis instalaciones</h1>
    <Table selectable={false}>
      <TableHead>
        <TableCell><FontIcon className={style.icon} value="assignment"/> Nombre</TableCell>
        <TableCell><FontIcon className={style.icon} value="place"/> Localización</TableCell>
      </TableHead>
      {facilities.map(facility =>
        <TableRow key={facility.name}>
          <TableCell>
            {facility.name}
          </TableCell>
          <TableCell>
            {facility.location}
          </TableCell>
          <TableCell numeric>
            <Button icon="chevron_right" ripple={false}/>
          </TableCell>
        </TableRow>
      )}
    </Table>
  </div>;

export default FacilityContent;
