
import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitLogin } from '../redux/action/login';


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    isLoggedIn: false
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({

      isLoggedIn: !this.state.isLoggedIn
    })

  }

  render() {
    return (
      <Container className="main-wrapper">
        <Row style={{ marginTop: '15vh' }}>
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
            }}
          >
            <h4>Login Here</h4>
            <div></div>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="email-field">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email-field"
                  placeholder="email"
                  onChange = {e=> this.setState({email:e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password-field">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="pass-field"
                  placeholder="password"
                  onChange ={e=>this.setState({password:e.target.value})}
                />
              </FormGroup>
              {this.props.showLoginError ? (
                <Alert color="primary">
                  Either your email or password is incorrect. Please try again.
                </Alert>
              ) : null}
              <Button className="mr-3" type="button" color="primary" onClick={()=>window.location.href="/dash"}>
                Submit
              </Button>
              <p>Not a member?</p>
              <p>Signup below</p>

            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) =>({
  email: state.email
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect()(LoginForm)
