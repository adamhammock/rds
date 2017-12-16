import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';
import Aside from './../components/Aside';
import Breadcrumb from './../components/Breadcrumb';
import Dashboard from './../components/Dashboard';
import Logout from './../components/Logout';


class Full extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <div className='app-body'>
          <Sidebar {...this.props} />
          <main className='main'>
            {false && <Breadcrumb />}
            <Container fluid>
              <Switch>
                <Route path='/logout' name='Logout' component={Logout} />
                <Route path='/dashboard' name='Dashboard' component={Dashboard} />
                <Redirect from='/' to='/dashboard' />
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
