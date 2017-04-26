import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Loader from 'core/components/Loader';

import { Card, CardTitle } from 'react-toolbox/lib/card';
import { Table, TableHead, TableCell, TableRow } from 'react-toolbox/lib/table';
import FontIcon from 'react-toolbox/lib/font_icon';

const Header = styled.div`
  font-size: 1.5em;
  font-style: normal;
  font-weight: normal;
  padding-bottom: 1em;
`;

const AlarmsCard = styled(Card)`
  &&& {
    width: 350px;
    margin-bottom: 2em;
  }
`;

const Icon = styled(FontIcon)`
  &&& {
    font-size: 1em;
  }
`;

class UnitContent extends Component {
  static propTypes = {
    alarms: PropTypes.array.isRequired,
    fetchAlarms: PropTypes.func.isRequired,
    unitId: PropTypes.string.isRequired,
  };
  componentWillMount() {
    this.props.fetchAlarms(this.props.unitId, 10);
  }

  renderAlarms = (alarms) => {
    if (alarms.length) {
      const alarmsToRender = alarms.map(alarm =>
        <TableRow key={alarm.id}>
          <TableCell>
            {moment(alarm.created_at).locale('es').format('LLL')}
          </TableCell>
          <TableCell>
            {alarm.title}
          </TableCell>
          <TableCell>
            {alarm.description}
          </TableCell>
        </TableRow>);
      return (
        <Table selectable={false}>
          <TableHead>
            <TableCell><Icon value="date_range" /> Fecha</TableCell>
            <TableCell><Icon value="reorder" /> Título</TableCell>
            <TableCell><Icon value="description" /> Descripción</TableCell>
          </TableHead>
          {alarmsToRender}
        </Table>);
    }
    return null;
  };

  render() {
    const { alarms, isLoadingAlarms } = this.props;
    return (
      <div>
        <Header>Unidad</Header>
        <AlarmsCard>
          <CardTitle
            title={alarms.length ? `${alarms.length} alarmas` : 'Ninguna alarma activa'}
            subtitle={alarms.length ? 'Necesita revisión' : 'Todo en orden'}
          />
        </AlarmsCard>
        {isLoadingAlarms ? <Loader /> : this.renderAlarms(alarms)}
      </div>
    );
  }
}

export default UnitContent;
