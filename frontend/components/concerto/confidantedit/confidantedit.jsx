import React, { useEffect, useState } from "react"

function ConfidantEdit({
   ccId,
   confidant,
   conurbations,
   demoConfidantLoggedIn,
   loadConurbations,
   unloadConurbations,
   deleteAccount,
   updateAccount
}) {
	const [username, setUsername] = useState("")
   const [email, setEmail] = useState("")
   const [locationId, setLocationId] = useState(null)
   const [newUsername, setNewUsername] = useState("")
   const [newEmail, setNewEmail] = useState("")
   const [newLocationId, setNewLocationId] = useState(null)
   
   //hook for currentPassword
   //hook for newPassword
   //hook for confirmNewPassword

   useEffect(()=>{
      if (!demoConfidantLoggedIn) {
			loadConurbations()
		}
      updateConfidantDataInState(confidant);
      return ()=>{
         unloadConurbations()   //confirm this works
      }
   }, [])

   useEffect(()=> {
      if(confidant){
         updateConfidantDataInState(confidant)
      }
   }, [confidant])

	updateConfidantDataInState = (confidant) => {
      setUsername(confidant.username)
      setEmail(confidant.email)
      setLocationId(confidant.location_id)
	}

	handleSubmit(e) {
		e.preventDefault()
		const ccId = this.props.ccId
		const username = this.state.username
		const newUsername = this.state.newUsername
		const email = this.state.email
		const newEmail = this.state.newEmail
		const locationId = this.state.locationId
		const newLocationId = this.state.newLocationId
		const editedConfidant = {
			id: ccId,
			username: newUsername ? newUsername : username,
			email: newEmail ? newEmail : email,
			location_id: newLocationId ? newLocationId : locationId,
		}
		this.props.updateAccount(editedConfidant)

		this.setState({
			newUsername: "",
			newEmail: "",
			newLocationId: null,
		})
	}

	usernameFieldArea(username, newUsername) {
		return (
			<div className="subsection-field-area">
				<div className="field-title">USERNAME</div>
				{this.props.demoConfidantLoggedIn ? (
					<div className="form-field">
						<span className="optional">{username}</span>
						<span className="demo-user">
							Make an account to change the username!
						</span>
					</div>
				) : (
					<input
						type="text"
						className="form-field"
						onChange={this.update("newUsername")}
						placeholder={username}
						value={newUsername ? newUsername : ""}
					/>
				)}
			</div>
		)
	}

	emailFieldArea(email, newEmail) {
		return (
			<div className="subsection-field-area">
				<div className="field-title">EMAIL</div>
				{this.props.demoConfidantLoggedIn ? (
					<div className="form-field">
						<span className="optional">{email}</span>
						<span className="demo-user">
							Make an account to change the email!
						</span>
					</div>
				) : (
					<input
						type="email"
						className="form-field"
						onChange={this.update("newEmail")}
						placeholder={email}
						value={newEmail ? newEmail : ""}
					/>
				)}
			</div>
		)
	}

	conurbationFieldArea() {
		return (
			<div className="subsection-field-area">
				<div className="field-title">CONURBATION</div>
				<div className="form-dropdown">
					{this.props.demoConfidantLoggedIn ? (
						<select
							className="demo-user"
							defaultValue="Make an account to change conurbations!"
						>
							<option
								disabled="disabled"
								value="Make an account to change conurbations!"
							>
								Make an account to change conurbations!
							</option>
						</select>
					) : (
						<select
							defaultValue="Select a new conurbation (optional)"
							onChange={this.update("newLocationId")}
						>
							<option
								disabled="disabled"
								value="Select a new conurbation (optional)"
							>
								Select a new conurbation {"("}optional{")"}
							</option>
							{this.conurbationFieldAreaOptions()}
						</select>
					)}
				</div>
			</div>
		)
	}

	conurbationFieldAreaOptions() {
		return this.props.conurbations.map((conurbation) => (
			<option value={conurbation.id} key={conurbation.id}>
				{conurbation.name}
			</option>
		))
	}

	formSubmitButton() {
		return this.props.demoConfidantLoggedIn ? (
			<div className="form-submit-button-demo-user">
				EDIT DISABLED FOR DEMO
			</div>
		) : (
			<input
				type="submit"
				className="form-submit-button"
				value="SAVE CHANGES"
			/>
		)
	}

	accountDeleteSection(confidantId) {
		return this.props.demoConfidantLoggedIn ? (
			<></>
		) : (
			<div className="form-column-cancel-account">
				<div className="cancel-account-heading">Cancel my account</div>
				<div className="cancel-account-message">
					When you do this, we'll get rid of your information from our
					database immediately.
				</div>
				<div
					className="cancel-account-button"
					onClick={() => {
						this.props.deleteAccount(confidantId)
					}}
				>
					CANCEL MY ACCOUNT
				</div>
				<div className="cancel-account-final-message">
					To review the personal information we have about you, scroll
					up to your account details and take a gander. If you have
					other questions, my contact information is in the footer.
					~_^
				</div>
			</div>
		)
	}

	render() {
		const username = this.state.username
		const newUsername = this.state.newUsername
		const usernameFieldArea = this.usernameFieldArea(username, newUsername)

		const email = this.state.email
		const newEmail = this.state.newEmail
		const emailFieldArea = this.emailFieldArea(email, newEmail)

		const conurbationFieldArea = this.conurbationFieldArea()

		const formSubmitButton = this.formSubmitButton()

		const ccId = this.props.ccId
		const accountDeleteSection = this.accountDeleteSection(ccId)

		return (
			<>
				<div className="confidantedit">
					<div className="confidantedit-container">
						<div className="container-greeting-column">
							<div className="greeting-column-heading">
								Welcome back, {username}!
							</div>
							<div className="greeting-column-subhead">
								Stolen any hearts lately?
							</div>
						</div>
						<div className="container-form-column">
							<div className="form-column-heading">
								Edit Your Account
							</div>
							<div className="form-column-section">
								<form onSubmit={this.handleSubmit}>
									<div className="form-section">
										<div className="form-section-heading">
											Personal Information
										</div>
										<div className="form-subsection">
											{usernameFieldArea}
											{emailFieldArea}
											{conurbationFieldArea}
										</div>
									</div>
									<div className="form-section">
										<div className="form-subsection">
											{formSubmitButton}
										</div>
									</div>
								</form>
							</div>
							{accountDeleteSection}
						</div>
					</div>
				</div>
			</>
		)
	}


// class ConfidantEdit extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			username: "",
// 			email: "",
// 			locationId: null,
// 			// currentPassword: "",
// 			newUsername: "",
// 			newEmail: "",
// 			newLocationId: null,
// 			// newPassword: "",
// 			// confirmNewPassword: "",
// 		}
// 		this.updateConfidantDataInState = this.updateConfidantDataInState.bind(
// 			this
// 		)
// 		this.handleSubmit = this.handleSubmit.bind(this)
// 		this.usernameFieldArea = this.usernameFieldArea.bind(this)
// 		this.emailFieldArea = this.emailFieldArea.bind(this)
// 		this.conurbationFieldArea = this.conurbationFieldArea.bind(this)
// 		this.conurbationFieldAreaOptions = this.conurbationFieldAreaOptions.bind(
// 			this
// 		)
// 		// this.currentPasswordFieldArea = this.currentPasswordFieldArea.bind(this)
// 		// this.newPasswordFieldArea = this.newPasswordFieldArea.bind(this)
// 		// this.confirmNewPasswordFieldArea = this.confirmNewPasswordFieldArea.bind(
// 		//     this
// 		// )
// 		this.formSubmitButton = this.formSubmitButton.bind(this)
// 		this.accountDeleteSection = this.accountDeleteSection.bind(this)
// 	}

// 	componentDidMount() {
// 		if (!this.props.demoConfidantLoggedIn) {
// 			this.props.loadConurbations()
// 		}
// 		this.updateConfidantDataInState(this.props.confidant)
// 	}

// 	componentDidUpdate(prevProps) {
// 		if (
// 			prevProps.confidant &&
// 			prevProps.confidant !== this.props.confidant
// 		) {
// 			this.updateConfidantDataInState(this.props.confidant)
// 		}
// 	}

// 	componentWillUnmount() {
// 		this.props.unloadConurbations()
// 	}

// 	update(field) {
// 		return (e) =>
// 			this.setState({
// 				[field]: e.target.value,
// 			})
// 	}

// 	updateConfidantDataInState(confidant) {
// 		this.setState({
// 			username: confidant.username,
// 			email: confidant.email,
// 			locationId: confidant.location_id,
// 		})
// 	}

// 	handleSubmit(e) {
// 		e.preventDefault()
// 		const ccId = this.props.ccId
// 		const username = this.state.username
// 		const newUsername = this.state.newUsername
// 		const email = this.state.email
// 		const newEmail = this.state.newEmail
// 		const locationId = this.state.locationId
// 		const newLocationId = this.state.newLocationId
// 		const editedConfidant = {
// 			id: ccId,
// 			username: newUsername ? newUsername : username,
// 			email: newEmail ? newEmail : email,
// 			location_id: newLocationId ? newLocationId : locationId,
// 		}
// 		this.props.updateAccount(editedConfidant)

// 		this.setState({
// 			newUsername: "",
// 			newEmail: "",
// 			newLocationId: null,
// 		})
// 	}

// 	usernameFieldArea(username, newUsername) {
// 		return (
// 			<div className="subsection-field-area">
// 				<div className="field-title">USERNAME</div>
// 				{this.props.demoConfidantLoggedIn ? (
// 					<div className="form-field">
// 						<span className="optional">{username}</span>
// 						<span className="demo-user">
// 							Make an account to change the username!
// 						</span>
// 					</div>
// 				) : (
// 					<input
// 						type="text"
// 						className="form-field"
// 						onChange={this.update("newUsername")}
// 						placeholder={username}
// 						value={newUsername ? newUsername : ""}
// 					/>
// 				)}
// 			</div>
// 		)
// 	}

// 	emailFieldArea(email, newEmail) {
// 		return (
// 			<div className="subsection-field-area">
// 				<div className="field-title">EMAIL</div>
// 				{this.props.demoConfidantLoggedIn ? (
// 					<div className="form-field">
// 						<span className="optional">{email}</span>
// 						<span className="demo-user">
// 							Make an account to change the email!
// 						</span>
// 					</div>
// 				) : (
// 					<input
// 						type="email"
// 						className="form-field"
// 						onChange={this.update("newEmail")}
// 						placeholder={email}
// 						value={newEmail ? newEmail : ""}
// 					/>
// 				)}
// 			</div>
// 		)
// 	}

// 	conurbationFieldArea() {
// 		return (
// 			<div className="subsection-field-area">
// 				<div className="field-title">CONURBATION</div>
// 				<div className="form-dropdown">
// 					{this.props.demoConfidantLoggedIn ? (
// 						<select
// 							className="demo-user"
// 							defaultValue="Make an account to change conurbations!"
// 						>
// 							<option
// 								disabled="disabled"
// 								value="Make an account to change conurbations!"
// 							>
// 								Make an account to change conurbations!
// 							</option>
// 						</select>
// 					) : (
// 						<select
// 							defaultValue="Select a new conurbation (optional)"
// 							onChange={this.update("newLocationId")}
// 						>
// 							<option
// 								disabled="disabled"
// 								value="Select a new conurbation (optional)"
// 							>
// 								Select a new conurbation {"("}optional{")"}
// 							</option>
// 							{this.conurbationFieldAreaOptions()}
// 						</select>
// 					)}
// 				</div>
// 			</div>
// 		)
// 	}

// 	conurbationFieldAreaOptions() {
// 		return this.props.conurbations.map((conurbation) => (
// 			<option value={conurbation.id} key={conurbation.id}>
// 				{conurbation.name}
// 			</option>
// 		))
// 	}

// 	formSubmitButton() {
// 		return this.props.demoConfidantLoggedIn ? (
// 			<div className="form-submit-button-demo-user">
// 				EDIT DISABLED FOR DEMO
// 			</div>
// 		) : (
// 			<input
// 				type="submit"
// 				className="form-submit-button"
// 				value="SAVE CHANGES"
// 			/>
// 		)
// 	}

// 	accountDeleteSection(confidantId) {
// 		return this.props.demoConfidantLoggedIn ? (
// 			<></>
// 		) : (
// 			<div className="form-column-cancel-account">
// 				<div className="cancel-account-heading">Cancel my account</div>
// 				<div className="cancel-account-message">
// 					When you do this, we'll get rid of your information from our
// 					database immediately.
// 				</div>
// 				<div
// 					className="cancel-account-button"
// 					onClick={() => {
// 						this.props.deleteAccount(confidantId)
// 					}}
// 				>
// 					CANCEL MY ACCOUNT
// 				</div>
// 				<div className="cancel-account-final-message">
// 					To review the personal information we have about you, scroll
// 					up to your account details and take a gander. If you have
// 					other questions, my contact information is in the footer.
// 					~_^
// 				</div>
// 			</div>
// 		)
// 	}

// 	render() {
// 		const username = this.state.username
// 		const newUsername = this.state.newUsername
// 		const usernameFieldArea = this.usernameFieldArea(username, newUsername)

// 		const email = this.state.email
// 		const newEmail = this.state.newEmail
// 		const emailFieldArea = this.emailFieldArea(email, newEmail)

// 		const conurbationFieldArea = this.conurbationFieldArea()

// 		const formSubmitButton = this.formSubmitButton()

// 		const ccId = this.props.ccId
// 		const accountDeleteSection = this.accountDeleteSection(ccId)

// 		return (
// 			<>
// 				<div className="confidantedit">
// 					<div className="confidantedit-container">
// 						<div className="container-greeting-column">
// 							<div className="greeting-column-heading">
// 								Welcome back, {username}!
// 							</div>
// 							<div className="greeting-column-subhead">
// 								Stolen any hearts lately?
// 							</div>
// 						</div>
// 						<div className="container-form-column">
// 							<div className="form-column-heading">
// 								Edit Your Account
// 							</div>
// 							<div className="form-column-section">
// 								<form onSubmit={this.handleSubmit}>
// 									<div className="form-section">
// 										<div className="form-section-heading">
// 											Personal Information
// 										</div>
// 										<div className="form-subsection">
// 											{usernameFieldArea}
// 											{emailFieldArea}
// 											{conurbationFieldArea}
// 										</div>
// 									</div>
// 									<div className="form-section">
// 										<div className="form-subsection">
// 											{formSubmitButton}
// 										</div>
// 									</div>
// 								</form>
// 							</div>
// 							{accountDeleteSection}
// 						</div>
// 					</div>
// 				</div>
// 			</>
// 		)
// 	}
// }

export default ConfidantEdit
