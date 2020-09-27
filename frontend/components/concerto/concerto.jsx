import React from "react"
import { Route } from "react-router-dom"
import { AuthRoute, ProtectedRoute } from "../../utils/route_utils"
import Splash from "./splish/splash"
import SigninFormContainer from "./sessionform/signinform_container"
import SignupFormContainer from "./sessionform/signupform_container"
import CoffeeSchedule from "./coffeeschedule/coffeeschedule_container"
import EventShow from "./eventshow/eventshow_container"

const Concerto = () => (
    <>
        <section>
            <AuthRoute path="/signin" component={SigninFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route exact path="/coffee_times" component={CoffeeSchedule} />
            <Route
                exact
                path="/coffee_times/:confabId/"
                component={EventShow}
            />
            <Route exact path="/" component={Splash} />
        </section>
    </>
)

//!! why does confab path render on erroneous inputs?

export default Concerto
