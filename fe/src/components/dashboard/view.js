import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBlock,
} from "reactstrap";

import ReactHighcharts from 'react-highcharts';

const DASHBOARD_CHART = 'dashboard.chart';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    console.log("Dashboard.componentWillMount")
    await this.props.connectSocket();
    await this.props.on(DASHBOARD_CHART, data => console.log(this.props.config));
  }

  async componentWillUnmount() {
    await this.props.disconnectSocket();
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardBlock className="card-body">
                <div className="chart-wrapper" style={{ height: 400 + 'px', marginTop: 40 + 'px' }}>
                  {true && <ReactHighcharts config={this.props.config} height={300}></ReactHighcharts>}
                </div>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard;
