import React, { PropTypes } from 'react';
import { Route } from 'react-router-dom';

import redirect from './redirect';

function createRoute(store) {
  const route = ({ component, render, ...rest }) => {
    const passedComponent = props => React.createElement(component, props);
    return (<Route
      {...rest}
      render={(props) => {
        const needRedirect = redirect({ state: store.getState(), ...rest });
        if (needRedirect) return needRedirect;
        return render ? render(props) : passedComponent(props);
      }}
    />);
  };

  route.propTypes = {
    // eslint-disable-next-line
    component: PropTypes.func,
    // eslint-disable-next-line
    render: PropTypes.func,
  };
  return route;
}

export default createRoute;
