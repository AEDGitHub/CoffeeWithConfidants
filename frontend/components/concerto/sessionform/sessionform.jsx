import React from "react"

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            locationId: null,
            demoUserCityId: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
        this.errorsFlash = this.errorsFlash.bind(this)
        this.emailField = this.emailField.bind(this)
        this.homeCityField = this.homeCityField.bind(this)
        this.homeCityFieldOptions = this.homeCityFieldOptions.bind(this)
    }

    componentDidMount() {
        if (this.props.formType === "signup") {
            this.props.loadConurbations()
        }
    }

    componentWillUnmount() {
        if (this.props.sessionErrors.length > 0) {
            this.props.unloadSessionErrors()
        }
        this.props.unloadConurbations()
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.target.value,
            })
    }

    handleSubmit(e) {
        e.preventDefault()
        const confidant = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            location_id: this.state.locationId,
        }
        this.props.processMainForm(confidant)
        this.props.unloadSessionErrors()
    }

    handleDemoSubmit(e) {
        e.preventDefault()
        const demoConfidant = {
            username: "Joker",
            password: "hunter12",
        }

        this.props.processDemoForm(demoConfidant)
    }

    errorsFlash() {
        if (this.props.sessionErrors.length === 0) {
            return <div className="sessionform-errors-flash-empty"></div>
        } else {
            return this.props.sessionErrors.map((message, idx) => (
                <div className="sessionform-errors-flash" key={idx}>
                    {message}
                </div>
            ))
        }
    }

    emailField() {
        if (this.props.formType === "signin") {
            return <></>
        } else {
            return (
                <input
                    required={true}
                    type="email"
                    className="sessionform-form-field"
                    onChange={this.update("email")}
                    placeholder="Email address"
                    value={this.state.email}
                />
            )
        }
    }

    homeCityField() {
        if (this.props.formType === "signin") {
            return <></>
        } else {
            return (
                <div className="sessionform-dropdown">
                    <select
                        required={true}
                        defaultValue="Home conurbation"
                        onChange={this.update("locationId")}
                    >
                        <option disabled="disabled" value="Home conurbation">
                            Home conurbation
                        </option>
                        {this.homeCityFieldOptions()}
                    </select>
                </div>
            )
        }
    }

    homeCityFieldOptions() {
        return this.props.conurbations.map((conurbation, idx) => (
            <option value={conurbation.id} key={idx}>
                {conurbation.name}
            </option>
        ))
    }

    render() {
        const mainMsgDisplay = (
            <div className="sessionform-main-msg">{this.props.mainMsg}</div>
        )

        const subMsgDisplay = (
            <div className="sessionform-sub-msg">{this.props.subMsg}</div>
        )

        const usernameField = (
            <input
                required={true}
                type="text"
                className="sessionform-form-field"
                onChange={this.update("username")}
                placeholder={this.props.unPlaceholder}
                value={this.state.username}
            />
        )

        const passwordField = (
            <input
                required={true}
                type="password"
                className="sessionform-form-field"
                onChange={this.update("password")}
                placeholder={this.props.pwPlaceholder}
                value={this.state.password}
            />
        )

        const submitFormButton = (
            <input
                type="submit"
                className="sessionform-submit-button"
                value={this.props.submitButtonText}
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
                    {this.errorsFlash()}
                    <div className="sessionform-form-container">
                        {mainMsgDisplay}
                        {subMsgDisplay}
                        <form onSubmit={this.handleSubmit}>
                            {usernameField}
                            {this.emailField()}
                            {passwordField}
                            {this.homeCityField()}
                            {submitFormButton}
                        </form>
                        <form onSubmit={this.handleDemoSubmit}>
                            {demoUserButton}
                        </form>
                        {this.props.navLink}
                    </div>
                </div>
            </>
        )
    }
}

export default SessionForm
