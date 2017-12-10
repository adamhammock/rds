import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import dashbordView from './view';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(dashbordView);
