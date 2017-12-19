import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

import { CLIENT_URL } from './../../config/config';

class Register extends Component {

  onSuccessRegister(payload) {
    const { token, user } = payload;
    /* cookie.save('token', token.token, { path: '/' });
    cookie.save('user', user, { path: '/' }); */
    window.location.href = `${CLIENT_URL}`;
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
    this.props.registerAccount(data, this.onSuccessRegister);
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardFooter className="p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                    <Input type="text" placeholder="Username" />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon>@</InputGroupAddon>
                    <Input type="text" placeholder="Email" />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                    <Input type="password" placeholder="Password" />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                    <Input type="password" placeholder="Repeat password" />
                  </InputGroup>
                  <Button color="success" onClick={() => this.handleFormSubmit()} block>Create Account</Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
