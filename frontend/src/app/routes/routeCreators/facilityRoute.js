/* eslint-disable react/prop-types */
import React from 'react';

import Layout from 'features/layout/components/Layout';

const facilityRouteCreator = Route => ({ component, ...rest }) =>
  <Route
    {...rest}
    render={props => (
      <Layout>
        {React.createElement(component, props)}
      </Layout>
      )}
  />;


export default facilityRouteCreator;
