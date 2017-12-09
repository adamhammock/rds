import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import headerView from './header';

const mapStateToProps = state => ({
  authenticated: state.login.authenticated,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(headerView);
