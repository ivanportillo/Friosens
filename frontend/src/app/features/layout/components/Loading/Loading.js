import React, { Component } from 'react';

class Loading extends Component {
  componentWillMount() {
    const { token, bootApp, isBooting } = this.props;
    if (token && !isBooting) bootApp();
  }

  render() {
    const { isBooting, children } = this.props;
    return (isBooting ? <h1>Loading</h1> : children);
  }
}

export default Loading;
