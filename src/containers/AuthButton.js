import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/auth';

const AuthButton = props => {
  const { isAuthenticated } = props;

  if (isAuthenticated) {
    return (
      <div onClick={props.logout} className="btn btn-outline-primary">
        Log out
      </div>
    );
  }

  return null;
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const actions = {
  logout
};

export default connect(
  mapStateToProps,
  actions
)(AuthButton);
