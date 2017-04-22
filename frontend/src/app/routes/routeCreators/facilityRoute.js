import React, { PropTypes } from 'react';
import { Route } from 'react-router-dom';

import Layout from 'components/Layout';

const facilityRouteCreator = (Route) => {
  return ({ component, ...rest }) =>
    <Route
      {...rest}
      render={props => (
        <Layout>
          {React.createElement(component, props)}
        </Layout>
      )}
    />;
};

export default facilityRouteCreator;
