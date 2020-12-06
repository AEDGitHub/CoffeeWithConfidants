import React, { useState, useEffect } from "react"

function SessionForm({
	conurbations,
	conurbationsAreLoaded,
	demoConfidantConurbationId,
	formType,
	mainMsg,
	subMsg,
	unPlaceholder,
	pwPlaceholder,
	submitButtonText,
	navLink,
	loadConurbations,
	unloadConurbations,
	processMainForm,
	processDemoForm,
}) {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [locationId, setLocationId] = useState(null)
	const [demoUserCityId, setDemoUserCityId] = useState(null)

	useEffect(() => {
		if (formType === "signup") {
			loadConurbations()
		}
		return function cleanup() {
			unloadConurbations()
		}
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		const confidant = {
			username: username,
			email: email,
			password: password,
			location_id: locationId,
		}
		processMainForm(confidant)
	}

	const handleDemoSubmit = (e) => {
		e.preventDefault()
		const demoConfidant = {
			username: "Joker",
			password: "hunter12",
		}
		processDemoForm(demoConfidant)
	}

	const emailField = () =>
		formType === "signin" ? (
			<></>
		) : (
			<input
				required={true}
				type="email"
				className="sessionform-form-field"
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email address"
				value={email}
			/>
		)

	const homeCityField = () =>
		formType === "signin" ? (
			<></>
		) : (
			<div className="sessionform-dropdown">
				<select
					required={true}
					defaultValue="Home conurbation"
					onChange={(e) => setLocationId(e.target.value)}
				>
					<option disabled="disabled" value="Home conurbation">
						Home conurbation
					</option>
					{homeCityFieldOptions()}
				</select>
			</div>
		)

	const homeCityFieldOptions = () =>
		conurbations.map((conurbation, idx) => (
			<option value={conurbation.id} key={idx}>
				{conurbation.name}
			</option>
		))

	const mainMsgDisplay = <div className="sessionform-main-msg">{mainMsg}</div>

	const subMsgDisplay = <div className="sessionform-sub-msg">{subMsg}</div>

	const usernameField = (
		<input
			required={true}
			type="text"
			className="sessionform-form-field"
			onChange={(e) => setUsername(e.target.value)}
			placeholder={unPlaceholder}
			value={username}
		/>
	)

	const passwordField = (
		<input
			required={true}
			type="password"
			className="sessionform-form-field"
			onChange={(e) => {
				setPassword(e.target.value)
			}}
			placeholder={pwPlaceholder}
			value={password}
		/>
	)

	const submitFormButton = (
		<input
			type="submit"
			className="sessionform-submit-button"
			value={submitButtonText}
		/>
	)

	const demoUserButton = (
		<input
			type="submit"
			className="sessionform-submit-button"
			value="SIGN IN DEMO USER"
		/>
	)

	return (
		<>
			<div className="sessionform">
				<div className="sessionform-form-container">
					{mainMsgDisplay()}
					{subMsgDisplay()}
					<form onSubmit={handleSubmit}>
						{usernameField()}
						{emailField()}
						{passwordField()}
						{homeCityField()}
						{submitFormButton()}
					</form>
					<form onSubmit={handleDemoSubmit}>{demoUserButton()}</form>
					{navLink}
				</div>
			</div>
		</>
	)
}

//class component, antiquated

// class SessionForm extends React.Component {
//    constructor(props) {
//       super(props)
//       this.state = {
//          username: "",
//          email: "",
//          password: "",
//          locationId: null,
//          demoUserCityId: null,
//       }
//       this.handleSubmit = this.handleSubmit.bind(this)
//       this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
//       this.emailField = this.emailField.bind(this)
//       this.homeCityField = this.homeCityField.bind(this)
//       this.homeCityFieldOptions = this.homeCityFieldOptions.bind(this)
//    }

//    componentDidMount() {
//       if (this.props.formType === "signup") {
//          this.props.loadConurbations()
//       }
//    }

//    componentWillUnmount() {
//       this.props.unloadConurbations()
//    }

//    update(field) {
//       return (e) =>
//          this.setState({
//             [field]: e.target.value,
//          })
//    }

//    handleSubmit(e) {
//       e.preventDefault()
//       const confidant = {
//          username:this.state.username,
//          email: this.state.email,
//          password: this.state.password,
//          location_id: this.state.locationId,
//       }
//       this.props.processMainForm(confidant)
//    }

//    handleDemoSubmit(e) {
//       e.preventDefault()
//       const demoConfidant = {
//          username: "Joker",
//          password: "hunter12",
//       }

//       this.props.processDemoForm(demoConfidant)
//    }

//    emailField() {
//       if (this.props.formType === "signin") {
//          return <></>
//       } else {
//          return (
//             <input
//                required={true}
//                type="email"
//                className="sessionform-form-field"
//                onChange={this.update("email")}
//                placeholder="Email address"
//                value={this.state.email}
//             />
//          )
//       }
//    }

//    homeCityField() {
//       if (this.props.formType === "signin") {
//          return <></>
//       } else {
//          return (
//             <div className="sessionform-dropdown">
//                <select
//                   required={true}
//                   defaultValue="Home conurbation"
//                   onChange={this.update("locationId")}
//                >
//                   <option disabled="disabled" value="Home conurbation">
//                      Home conurbation
// 						</option>
//                   {this.homeCityFieldOptions()}
//                </select>
//             </div>
//          )
//       }
//    }

//    homeCityFieldOptions() {
//       return this.props.conurbations.map((conurbation, idx) => (
//          <option value={conurbation.id} key={idx}>
//             {conurbation.name}
//          </option>
//       ))
//    }

//    render() {
//       const mainMsgDisplay = (
//          <div className="sessionform-main-msg">{this.props.mainMsg}</div>
//       )

//       const subMsgDisplay = (
//          <div className="sessionform-sub-msg">{this.props.subMsg}</div>
//       )

//       const usernameField = (
//          <input
//             required={true}
//             type="text"
//             className="sessionform-form-field"
//             onChange={this.update("username")}
//             placeholder={this.props.unPlaceholder}
//             value={this.state.username}
//          />
//       )

//       const passwordField = (
//          <input
//             required={true}
//             type="password"
//             className="sessionform-form-field"
//             onChange={this.update("password")}
//             placeholder={this.props.pwPlaceholder}
//             value={this.state.password}
//          />
//       )

//       const submitFormButton = (
//          <input
//             type="submit"
//             className="sessionform-submit-button"
//             value={this.props.submitButtonText}
//          />
//       )

//       const demoUserButton = (
//          <input
//             type="submit"
//             className="sessionform-submit-button"
//             value="SIGN IN DEMO USER"
//          />
//       )

//       return (
//          <>
//             <div className="sessionform">
//                <div className="sessionform-form-container">
//                   {mainMsgDisplay}
//                   {subMsgDisplay}
//                   <form onSubmit={this.handleSubmit}>
//                      {usernameField}
//                      {this.emailField()}
//                      {passwordField}
//                      {this.homeCityField()}
//                      {submitFormButton}
//                   </form>
//                   <form onSubmit={this.handleDemoSubmit}>
//                      {demoUserButton}
//                   </form>
//                   {this.props.navLink}
//                </div>
//             </div>
//          </>
//       )
//    }
// }

export default SessionForm
