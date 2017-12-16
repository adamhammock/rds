import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import SweetAlert from 'react-bootstrap-sweetalert';
import cookie from 'react-cookies';
import {
  Container, 
  Row, 
  Col, 
  CardGroup, 
  Card, 
  CardFooter, 
  Button, 
  Input, 
  InputGroup, 
  InputGroupAddon
} from 'reactstrap';

import { CLIENT_URL } from './../../config/config';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alertIsOpen: false
    };
    this.onCloseAlert = this.onCloseAlert.bind(this);
  }

  onSuccessLogin(payload) {
    const { token, user } = payload;
    /* cookie.save('token', token.token, { path: '/' });
    cookie.save('user', user, { path: '/' }); */
    window.location.href = CLIENT_URL;
  };

  handleFormSubmit() {
    /*
    |-------------------------------------------------------------------------------
    | TODO {Abdelghafour}: hard coded data
    |-------------------------------------------------------------------------------
    |
    | Need to take care of hardcoded data
    |
    |
    |-------------------------------------------------------------------------------
    */
    const data = {};
    this.props.loginUser(formProps, this.onSuccessLogin);
  };

  onCloseAlert() {
    this.setState({ alertIsOpen: false });
  };

  renderAlert() {
    alert = this.state.alertIsOpen ?
      (
        <div>
          <SweetAlert warning title="Error authentication" onConfirm={this.onCloseAlert}>
            {this.props.errorMessage}
          </SweetAlert>
        </div>) : '';
    return alert;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardFooter>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                      <Input type="text" placeholder="Username" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                      <Input type="password" placeholder="Password" />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" onClick={() => this.handleFormSubmit()} className="px-4">Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardFooter className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" active>Register Now!</Button>
                    </div>
                  </CardFooter>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;  