import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { registerAccount } from './../../store/actions/register';
import registerView from './register';

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    registerAccount,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(registerView);
