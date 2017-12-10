import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import SweetAlert from 'react-bootstrap-sweetalert';
const { func } = PropTypes;

class Dashboard extends Component {

  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (<div>Dashboard</div>);
  }
}

export default Dashboard;
