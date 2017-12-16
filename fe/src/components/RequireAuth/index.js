import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import requireAuthView from './require-auth';


export default function (ComposedComponent) {
  const mapStateToProps = state => ({
    authenticated: state.login.authenticated || state.register.authenticated ,
    ComposedComponent
  });

  const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);
  return connect(mapStateToProps, mapDispatchToProps)(requireAuthView);
}
