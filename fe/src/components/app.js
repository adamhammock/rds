import React, { Component } from 'react';
import HeaderTemplate from './common/header';
import FooterTemplate from './common/footer';

class App extends Component {
  render() {
    return (<div>
      <div>
        <HeaderTemplate logo="Rservior Data Admin" />
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        {this.props.children}
      </div>
      <div>
        <FooterTemplate />
      </div>
    </div>);
  }
}

export default App;  