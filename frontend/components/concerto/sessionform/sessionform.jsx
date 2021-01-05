import React, { useState, useEffect } from "react"

function SessionForm({
	conurbations,
	conurbationsAreLoaded,
	demoConfidantConurbationId,
	flashStatus,
	formType,
	mainMsg,
	subMsg,
	unPlaceholder,
	pwPlaceholder,
	submitButtonText,
	navLink,
	loadConurbations,
	unloadConurbations,
	unloadFlash,
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

	useEffect(() => {
		return function cleanup() {
			if (flashStatus === "failure") {
				unloadFlash()
			}
		}
	}, [flashStatus])

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
					{mainMsgDisplay}
					{subMsgDisplay}
					<form onSubmit={handleSubmit}>
						{usernameField}
						{emailField()}
						{passwordField}
						{homeCityField()}
						{submitFormButton}
					</form>
					<form onSubmit={handleDemoSubmit}>{demoUserButton}</form>
					{navLink}
				</div>
			</div>
		</>
	)
}

export default SessionForm
