import React, { useContext } from 'react';

import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';


const Login = () => {

  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, { 
    email: '', 
    password: '',
  });

  return (
    <section id="login-page" className="auth">

        <form id="login" onSubmit={onSubmit}>

            <div className="container">
                <div className="brand-logo"></div>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input 
                  type="email"
                  id="email" 
                  name="email" //name={LoginFormKeys.Email}//
                  placeholder="Sokka@gmail.com" 
                  onChange={onChange}
                  value={values.email}
                 />

                <label htmlFor="login-pass">Password:</label>
                <input 
                  type="password"
                  id="login-password" 
                  name="password"//name={LoginFormKeys.Password}//
                  onChange={onChange}
                  value={values.password}
                 />
                <input type="submit" className="btn submit" value="Login" />
                <p className="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form>
    </section>
  )
}

export default Login