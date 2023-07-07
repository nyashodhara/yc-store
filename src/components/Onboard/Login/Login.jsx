import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Login.scss"
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, [])

  const [isSignIn, setIsSignIn] = useState(true);


  const handleToggle = () => {
    setIsSignIn(!isSignIn);
    setIsError(false);
  };

  const [isError, setIsError] = useState(false);
  const handleError = () => {
    setIsError(true);
  };

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignIn) {
      try {
        const response = await axios.post('http://localhost:8080/customer/login', { mobile, password });
        if (response.data.status === "Success") {
          navigate('/home')
          // Store the token in local storage
          localStorage.setItem('token', JSON.stringify(response.data));
        }
        else {
          handleError(true)
          navigate('/')
        }
      } catch (error) {
        handleError(true)
        navigate('/')
        console.error(error); // Handle login error
      }
    } else {
      try {
        const response = await axios.post('http://localhost:8080/customer/register', { name, mobile, email, password });
        if (response.data.status === "Success") {
          navigate('/home')
          localStorage.setItem('token', JSON.stringify(response.data));
        }
        else {
          handleError(true)
          navigate('/')
        }
      } catch (error) {
        handleError(true)
        navigate('/')
        console.error(error); // Handle login error
      }
    }
  };

  return (
    <>{isSignIn ?
      <body >
        <div className="login-page">
          <div className="form" onSubmit={handleSubmit}>
            <div className="login">
              <div className="login-header">
                <h3>EKART</h3>
                <p>Please enter your credentials to login.</p>
              </div>
            </div>
            <form className="login-form">
              <input type="text" placeholder="mobile" value={mobile}
                onChange={(e) => setMobile(e.target.value)} />
              <input type="password" placeholder="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <button>login</button>
              <div >
                <p className="error">{isError ? "Invalid username and password Please try again!" : ''}</p>
              </div>
              <p className="message">Not registered? <a onClick={handleToggle}>Create an account</a></p>
            </form>
          </div>
        </div>
      </body> :

      <body >
        <div className="login-page">
          <div className="form" onSubmit={handleSubmit}>
            <div className="login">
              <div className="login-header">
                <h3>EKART</h3>
                <p>Please enter your credentials to register.</p>
              </div>
              <form className="login-form">
                <input type="text" placeholder="name" value={name}
                  onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="mobile" value={mobile}
                  onChange={(e) => setMobile(e.target.value)} />
                <input type="email" placeholder="email" value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <button>Sign Up</button>
                <div >
                  <p className="error">{isError ? "Failed to register!" : ''} </p>
                </div>
                <p className="message">Already registered? <a onClick={handleToggle}>Login</a></p>
              </form>
            </div>
          </div>
        </div>
      </body>}
    </>
  )
}

export default Login