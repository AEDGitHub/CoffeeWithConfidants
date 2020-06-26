import React from "react";
import { Route } from "react-router-dom";
import SigninFormContainer from './sessionform/signinform_container';
import SignupFormContainer from './sessionform/signupform_container';

const Concerto = () => (
    <>
        <section>
            <Route path='/signin' component={SigninFormContainer} />
            <Route path='/signup' component={SignupFormContainer} />
        </section>
    </>
)

export default Concerto;