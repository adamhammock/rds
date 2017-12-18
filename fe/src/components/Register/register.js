import React, { Component } from 'react';
import { Field, reduxForm, formValues } from 'redux-form';
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

const form = reduxForm({
  form: 'register'
});

import { CLIENT_URL } from './../../config/config';

class Register extends Component {

  onSuccessRegister(payload) {
    const { token, user } = payload;
    /* cookie.save('token', token.token, { path: '/' });
    cookie.save('user', user, { path: '/' }); */
    window.location.href = `${CLIENT_URL}`;
  };

  handleFormSubmit(formProps) {
    const { username, password, email, companyName } = formProps;
    const data = {
      user: { username, password },
      account: { name: companyName }
    }
    this.props.registerAccount(data, this.onSuccessRegister);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className='app flex-row align-items-center'>
        <Container>
          <Row className='justify-content-center'>
            <Col md='6'>
              <Card className='mx-4'>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                  <CardFooter className='p-4'>
                    <h1>Register</h1>
                    <p className='text-muted'>Create your account</p>
                    <InputGroup className='mb-3'>
                      <InputGroupAddon><i className='icon-user'></i></InputGroupAddon>
                      <Field name='username' className='form-control' component='input' type='text' placeholder='Username' />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                      <InputGroupAddon>@</InputGroupAddon>
                      <Field name='email' className='form-control' component='input' type='text' placeholder='Email' />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                      <InputGroupAddon><i className='icon-lock'></i></InputGroupAddon>
                      <Field name='password' className='form-control' component='input' type='password' placeholder='Password' />
                    </InputGroup>
                    <InputGroup className='mb-4'>
                      <InputGroupAddon><i className='icon-lock'></i></InputGroupAddon>
                      <Field name='companyName' className='form-control' component='input' type='text' placeholder='Company Name' />
                    </InputGroup>
                    <Button type='submit' color='success' block>Create Account</Button>
                  </CardFooter>
                </form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default form(Register);
