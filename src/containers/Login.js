import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../actions/auth';
import { validateEmail } from '../utils/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isIncorrectData: false,
      isInvalidEmail: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const newState = {
      [e.target.name]: e.target.value
    };

    if (this.state.isIncorrectData) {
      newState.isIncorrectData = false;
    }

    if (e.target.name === 'email') {
      if (!validateEmail(e.target.value)) {
        newState.isInvalidEmail = true;
      } else {
        newState.isInvalidEmail = false;
      }
    }

    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;

    if (email === 'test@email.com' && password === 'test') {
      this.props.login();
    } else {
      this.setState({ isIncorrectData: true });
    }
  }

  render() {
    const { isIncorrectData, isInvalidEmail } = this.state;
    const { isAuthenticated } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    const inputEmailClassName = isInvalidEmail
      ? 'form-control input-invalid-validation'
      : 'form-control';

    return (
      <form className="form-login" onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please log in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          className={inputEmailClassName}
          placeholder="Email address"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        {isIncorrectData && (
          <div className="alert alert-danger" role="alert">
            Incorrect email address or password!
          </div>
        )}
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Log in
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const actions = {
  login
};

export default connect(
  mapStateToProps,
  actions
)(Login);
