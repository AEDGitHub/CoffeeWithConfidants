import React from "react"
import { Route } from "react-router-dom"
import { AuthRoute, ProtectedRoute } from "../../utils/route_utils"
import CoffeeSchedule from "./coffeeschedule/coffeeschedule_container"
import ConfidantEdit from "./confidantedit/confidantedit_container"
import EventShow from "./eventshow/eventshow_container"
import Flash from "./flash/flash_container"
import SigninFormContainer from "./sessionform/signinform_container"
import SignupFormContainer from "./sessionform/signupform_container"
import Splash from "./splish/splash"

const Concerto = () => (
	<>
		<section id="concerto">
			<Flash />
			<AuthRoute path="/signin" component={SigninFormContainer} />
			<AuthRoute path="/signup" component={SignupFormContainer} />
			<ProtectedRoute path="/confidants/edit" component={ConfidantEdit} />
			<Route exact path="/coffee_times/:confabId" component={EventShow} />
			<Route exact path="/coffee_times" component={CoffeeSchedule} />
			<Route exact path="/" component={Splash} />
		</section>
	</>
)

export default Concerto
