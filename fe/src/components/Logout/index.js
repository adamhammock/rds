import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logoutUser } from './../../store/actions/login';
import logoutView from './logout';

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    logoutUser,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(logoutView);
