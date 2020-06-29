import React from "react";
import { Route } from "react-router-dom";
import Splash from './splash/splash';
import SigninFormContainer from './sessionform/signinform_container';
import SignupFormContainer from './sessionform/signupform_container';

const Concerto = () => (
    <>
        <section>
            <Route path='/signin' component={SigninFormContainer} />
            <Route path='/signup' component={SignupFormContainer} />
            <Route exact path='/' component={Splash}/>
        </section>
    </>
)

export default Concerto;