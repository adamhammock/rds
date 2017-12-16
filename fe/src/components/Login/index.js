import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loginUser } from './../../store/actions/login'
import loginView from './login';

const mapStateToProps = state => ({
    authenticated: state.login.authenticated,
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    loginUser,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(loginView);
