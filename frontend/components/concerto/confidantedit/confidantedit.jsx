import React, { useEffect, useState } from "react"

function ConfidantEdit({
	ccId,
	confidant,
	conurbations,
	demoConfidantLoggedIn,
	loadConurbations,
	unloadConurbations,
	deleteAccount,
	updateAccount,
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

	useEffect(() => {
		if (!demoConfidantLoggedIn) {
			loadConurbations()
		}
		updateConfidantDataInState(confidant)
		return function cleanup() {
			unloadConurbations()
		}
	}, [])

	useEffect(() => {
		if (confidant) {
			updateConfidantDataInState(confidant)
		}
	}, [confidant])

	const updateConfidantDataInState = (confidant) => {
		setUsername(confidant.username)
		setEmail(confidant.email)
		setLocationId(confidant.location_id)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const editedConfidant = {
			id: ccId,
			username: newUsername ? newUsername : username,
			email: newEmail ? newEmail : email,
			location_id: newLocationId ? newLocationId : locationId,
		}
		updateAccount(editedConfidant)

		setNewUsername("")
		setNewEmail("")
		setNewLocationId(null)
	}

	const usernameFieldArea = (username, newUsername) => (
		<div className="subsection-field-area">
			<div className="field-title">USERNAME</div>
			{demoConfidantLoggedIn ? (
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
					onChange={(e) => setNewUsername(e.target.value)}
					placeholder={username}
					value={newUsername ? newUsername : ""}
				/>
			)}
		</div>
	)

	const emailFieldArea = (email, newEmail) => (
		<div className="subsection-field-area">
			<div className="field-title">EMAIL</div>
			{demoConfidantLoggedIn ? (
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
					onChange={(e) => setNewEmail(e.target.value)}
					placeholder={email}
					value={newEmail ? newEmail : ""}
				/>
			)}
		</div>
	)

	const conurbationFieldArea = () => (
		<div className="subsection-field-area">
			<div className="field-title">CONURBATION</div>
			<div className="form-dropdown">
				{demoConfidantLoggedIn ? (
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
						onChange={(e) => setNewLocationId(e.target.value)}
					>
						<option
							disabled="disabled"
							value="Select a new conurbation (optional)"
						>
							Select a new conurbation {"("}optional{")"}
						</option>
						{conurbationFieldAreaOptions()}
					</select>
				)}
			</div>
		</div>
	)

	const conurbationFieldAreaOptions = () =>
		conurbations.map((conurbation) => (
			<option value={conurbation.id} key={conurbation.id}>
				{conurbation.name}
			</option>
		))

	const formSubmitButton = () =>
		demoConfidantLoggedIn ? (
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

	const accountDeleteSection = (confidantId) =>
		demoConfidantLoggedIn ? (
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
						deleteAccount(confidantId)
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
							<form onSubmit={handleSubmit}>
								<div className="form-section">
									<div className="form-section-heading">
										Personal Information
									</div>
									<div className="form-subsection">
										{usernameFieldArea(
											username,
											newUsername
										)}
										{emailFieldArea(email, newEmail)}
										{conurbationFieldArea()}
									</div>
								</div>
								<div className="form-section">
									<div className="form-subsection">
										{formSubmitButton()}
									</div>
								</div>
							</form>
						</div>
						{accountDeleteSection(ccId)}
					</div>
				</div>
			</div>
		</>
	)
}

export default ConfidantEdit
