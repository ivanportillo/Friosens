/* eslint-disable no-unused-vars,no-confusing-arrow */
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Button from 'react-toolbox/lib/button';

const StyledButton = styled(({ confirm, ...rest }) => <Button {...rest} />)`
  background: ${props => props.confirm ? 'red' : 'white'};
  &&& {
    color: ${props => props.confirm ? 'white' : 'black'};
    &:hover {
      background: ${props => props.confirm ? 'red' : 'white'};
    }
  }
`;

class DeleteButton extends Component {
  static propTypes = {
    action: PropTypes.func.isRequired,
  };
  state = {
    confirm: false,
  };

  handleFirstClick = () => this.setState({ confirm: true });


  render() {
    const { action } = this.props;
    return (
      <StyledButton
        icon={!this.state.confirm ? 'clear' : null}
        label={this.state.confirm ? '¿Seguro?' : null}
        confirm={this.state.confirm}
        onClick={this.state.confirm ? action : this.handleFirstClick}
        ripple={false}
      />
    );
  }
}

export default DeleteButton;
