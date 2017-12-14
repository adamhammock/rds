import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { connectSocket, disconnectSocket, on } from './../../store/actions/socket';
import dashbordView from './view';

const mapStateToProps = state => ({
  config: state.socket.config,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    connectSocket,
    disconnectSocket,
    on,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(dashbordView);
