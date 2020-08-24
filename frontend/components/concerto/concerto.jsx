import React from "react"
import { Route } from "react-router-dom"
import { AuthRoute } from "../../utils/route_utils"
import Splash from "./splash/splash"
import SigninFormContainer from "./sessionform/signinform_container"
import SignupFormContainer from "./sessionform/signupform_container"
import CoffeeSchedule from "./coffeeschedule/coffee_schedule_container"

const Concerto = () => (
    <>
        <section>
            <AuthRoute path="/signin" component={SigninFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route path="/coffee_times" component={CoffeeSchedule} />
            <Route exact path="/" component={Splash} />
        </section>
    </>
)

export default Concerto
