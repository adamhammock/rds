import React, { Component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';

import { CLIENT_URL } from '../../../config/config';

class Logout extends Component {
  componentWillMount() {
    this.props.logoutUser();
    cookie.remove('token', { path: '/' });
    cookie.remove('user', { path: '/' });
    localStorage.clear();
    window.location.href = CLIENT_URL + '/login';
  }

  render() {
    return <div>Sorry to see you go!</div>;
  }
}

export default Logout;
