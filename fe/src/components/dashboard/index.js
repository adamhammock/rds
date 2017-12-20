import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { connectSocket, disconnectSocket, on } from './../../store/actions/socket';
import dashbordView from './view';

const mapStateToProps = state => ({
  yAxis: state.socket.yAxis,
  xAxis: state.socket.xAxis,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    connectSocket,
    disconnectSocket,
    on,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(dashbordView);
