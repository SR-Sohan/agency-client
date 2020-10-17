import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css'
import { handleGoogleSignIn, initializeFirebase } from './loginManager';

const Login = () => {
   //Initializwfirebase
   initializeFirebase();

   //User Context
   const {setLoggedInuser} = useContext(UserContext);

   //History and location method
   let history = useHistory();
   let location = useLocation();
   let { from } = location.state || { from: { pathname: "/" } };

   // Handle Google SignIn button
   const googleSignIn = () => {
       handleGoogleSignIn()
       .then( res => {
            setLoggedInuser(res);
           history.replace(from);
       })
   }


    return (
        <div className="login-area">
        <Container> 
             <div className="logo-area"> 
                 <Link to="/"> 
                  <img src={require('../../images/logos/logo.png')} alt=""/>
                 </Link>
             </div>
             <div className="login-form"> 
                 <h2>Login With</h2>
                 <div onClick={googleSignIn} className="google-login"> 
                     <div className="google-img"> 
                         <img src={require('../../images/google.png')} alt=""/>
                     </div>
                     <div className="google-text">
                         <p>Continue with Google</p>
                     </div>
                 </div>
                 <div className="create-account-area"> 
                     <p className="text-center">Don’t have an account? <span>Create an account</span></p>
                 </div>
             </div>
        </Container>
     </div>
    );
};

export default Login;