import React from "react"

class ConfidantEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            locationId: null,
            currentPassword: "",
            newUsername: "",
            newEmail: "",
            newLocationId: null,
            newPassword: "",
            confirmNewPassword: "",
            passwordsMatch: false,
        }
        this.updateConfidantDataInState = this.updateConfidantDataInState.bind(
            this
        )
        this.usernameFieldArea = this.usernameFieldArea.bind(this)
        this.emailFieldArea = this.emailFieldArea.bind(this)
        this.conurbationFieldArea = this.conurbationFieldArea.bind(this)
        this.conurbationFieldAreaOptions = this.conurbationFieldAreaOptions.bind(
            this
        )
        this.currentPasswordFieldArea = this.currentPasswordFieldArea.bind(this)
        this.newPasswordFieldArea = this.newPasswordFieldArea.bind(this)
        this.confirmNewPasswordFieldArea = this.confirmNewPasswordFieldArea.bind(
            this
        )
        this.accountDeleteSection = this.accountDeleteSection.bind(this)
    }

    componentDidMount() {
        if (!this.props.demoConfidantLoggedIn) {
            this.props.loadConurbations()
        }
        this.updateConfidantDataInState(this.props.confidant)
    }

    componentDidUpdate(prevProps) {
        console.log("componentDidUpdate now firing!")
        console.log(`LS Username is ${this.state.username}`)
        console.log(`LS Email is ${this.state.email}`)
        console.log(`LS Location is ${this.state.locationId}`)
        console.log(`LS New Username is ${this.state.newUsername}`)
        console.log(`LS New Email is ${this.state.newEmail}`)
        console.log(`LS New Location is ${this.state.newLocationId}`)
        console.log(`LS Current Password is ${this.state.currentPassword}`)
        console.log(`LS Current New Password is ${this.state.newPassword}`)
        console.log(
            `LS Current Confirm New Password is ${this.state.confirmNewPassword}`
        )
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.target.value,
            })
    }

    updateConfidantDataInState(confidant) {
        // console.log(`updateConfidantDataInState now firing!`)
        // console.log(Object.values(confidant))
        // console.log(`Props Username is ${confidant.username}`)
        // console.log(`Props Email is ${confidant.email}`)
        // console.log(`Props Location is ${confidant.location_id}`)
        this.setState({
            username: confidant.username,
            email: confidant.email,
            locationId: confidant.location_id,
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

    currentPasswordFieldArea(currentPassword) {
        return (
            <div className="subsection-field-area">
                <div className="field-title">CURRENT PASSWORD</div>
                {this.props.demoConfidantLoggedIn ? (
                    <div className="form-field">
                        <span className="optional">•••••••</span>
                        <span className="demo-user">
                            Make an account to change the password!
                        </span>
                    </div>
                ) : (
                    <input
                        type="password"
                        className="form-field"
                        onChange={this.update("currentPassword")}
                        placeholder="•••••••••••"
                        value={currentPassword}
                    />
                )}
            </div>
        )
    }

    newPasswordFieldArea(newPassword) {
        return (
            <div className="subsection-field-area">
                <div className="field-title">NEW PASSWORD</div>
                {this.props.demoConfidantLoggedIn ? (
                    <div className="form-field">
                        <span className="optional">{""}</span>
                        <span className="demo-user">
                            Make an account to change the password!
                        </span>
                    </div>
                ) : (
                    <input
                        type="password"
                        className="form-field"
                        onChange={this.update("newPassword")}
                        placeholder="Give us another one..."
                        value={newPassword}
                    />
                )}
            </div>
        )
    }

    confirmNewPasswordFieldArea(confirmNewPassword) {
        return (
            <div className="subsection-field-area">
                <div className="field-title">CONFIRM NEW PASSWORD</div>
                {this.props.demoConfidantLoggedIn ? (
                    <div className="form-field">
                        <span className="optional">{""}</span>
                        <span className="demo-user">
                            Make an account to change the password!
                        </span>
                    </div>
                ) : (
                    <input
                        type="password"
                        className="form-field"
                        onChange={this.update("confirmNewPassword")}
                        placeholder="Give us another one!!!"
                        value={confirmNewPassword}
                    />
                )}
            </div>
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

        const currentPassword = this.state.currentPassword
        const currentPasswordFieldArea = this.currentPasswordFieldArea(
            currentPassword
        )

        const newPassword = this.state.newPassword
        const newPasswordFieldArea = this.newPasswordFieldArea(newPassword)

        const confirmNewPassword = this.state.confirmNewPassword
        const confirmNewPasswordFieldArea = this.confirmNewPasswordFieldArea(
            confirmNewPassword
        )

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
                                <form>
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
                                        <div className="form-section-heading">
                                            Change Your Password
                                        </div>
                                        <div className="form-subsection">
                                            {currentPasswordFieldArea}
                                            {newPasswordFieldArea}
                                            {confirmNewPasswordFieldArea}
                                            <div className="form-submit-button">
                                                SAVE CHANGES
                                            </div>
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
}

export default ConfidantEdit
