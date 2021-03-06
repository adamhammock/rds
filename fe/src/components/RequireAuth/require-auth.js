import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Authentication extends Component {
  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: React.PropTypes.object
  }

  componentWillMount() {
    if (!this.props.authenticated) {
      this.props.history.push('/login');
    }
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.authenticated) {
      this.props.history.push('/login');
    }
  }

  render() {
    if (this.props.authenticated) {
      return <this.props.ComposedComponent {...this.props} />
    }
    return null;
  }
}
