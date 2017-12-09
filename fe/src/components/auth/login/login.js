import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import SweetAlert from 'react-bootstrap-sweetalert';
import cookie from 'react-cookies';

import { CLIENT_URL } from '../../../config/config';

const form = reduxForm({
  form: 'login'
});

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alertIsOpen: false
    };
    this.onCloseAlert = this.onCloseAlert.bind(this);
  }

  onSuccessLogin(payload) {
    const { token, user } = payload;
    cookie.save('token', token.token, { path: '/' });
    cookie.save('user', user, { path: '/' });
    window.location.href = CLIENT_URL;
  };

  handleFormSubmit(formProps) {
    formProps.playerId = '12345';
    this.props.loginUser(formProps, this.onSuccessLogin);
  };

  onCloseAlert() {
    this.setState({ alertIsOpen: false });
  };

  renderAlert() {
    alert = this.state.alertIsOpen ?
      (
        <div>
          <SweetAlert warning title="Error authentication" onConfirm={this.onCloseAlert}>
            {this.props.errorMessage}
          </SweetAlert>
        </div>) : '';
    return alert;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          {this.renderAlert()}
          <div>
            <label>Username</label>
            <Field name="username" className="form-control" component="input" type="text" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" className="form-control" component="input" type="password" />
          </div>
          <div>
            <br />
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default form(Login);  