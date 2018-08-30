import React from 'react';
import LoginForm from '../components/loginForm';
import Signup from '../components/createProfile';

const Login = (props)=>{
  return (
    <div>
      <section>
        <LoginForm />
      </section>
      <section>
        <Signup />
      </section>
    </div>
  )
}
export default Login;
