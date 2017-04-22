import React from 'react';
import { Table, TableHead, TableCell, TableRow } from 'react-toolbox/lib/table';
import Button from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';
import styled from 'styled-components';

const facilities = [
  { name: 'Instalación 1', location: 'Localización 1' },
  { name: 'Instalación 2', location: 'Localización 2' },
  { name: 'Instalación 3', location: 'Localización 3' },
  { name: 'Instalación 4', location: 'Localización 4' },
  { name: 'Instalación 5', location: 'Localización 5' },
];

const Content = styled.div` 
  padding-top: 2.5em;
  padding-left: 4em;
  padding-right: 4em;
  color: #39796b;
`;

const Header = styled.div`
  font-size: 1.5em;
  font-style: normal;
  font-weight: normal;
  padding-bottom: 1em;
`;

const Icon = styled(FontIcon)`
  font-size: 1em;
`;

const FacilityContent = () =>
  <Content>
    <Header>Mis instalaciones</Header>
    <Table selectable={false}>
      <TableHead>
        <TableCell><Icon value="assignment" /> Nombre</TableCell>
        <TableCell><Icon value="place" /> Localización</TableCell>
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
            <Button icon="chevron_right" ripple={false} />
          </TableCell>
        </TableRow>,
      )}
    </Table>
  </Content>;

export default FacilityContent;
