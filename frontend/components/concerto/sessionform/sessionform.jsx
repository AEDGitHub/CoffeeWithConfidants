import React from "react";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            location_id: 3,
        }
        // this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.emailField = this.emailField.bind(this);
        this.homeCityField = this.homeCityField.bind(this);
    }

    update(field){
        // debugger;
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const confidant = Object.assign({}, this.state);
        this.props.processMainForm(confidant);
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        const demoConfidant = {
            username: 'Joker',
            email: 'breakintobreakout@fakemail.com',
            location_id: 3, //This will be a problem upon pushing to Heroku!!!
            password: 'hunter12',
        }
        this.props.processDemoForm(demoConfidant);
    }

    // Displays, Fields, and Buttons with constant logic

    emailField() {
        if (this.props.formType === 'signin') {
            return <></>;
        } else {
            return(
                <input
                    type="text"
                    className="sessionform-form-field"
                    onChange={this.update('email')}
                    placeholder="Email address"
                    value={this.state.email}
                />
            );
        }
    }

    homeCityField() {
        if (this.props.formType === 'signin') {
            return <></>;
        } else {
            return <></>; //future home of select conurbation functionality!
        }
    }

    render() {

        // Displays, Fields, and Buttons with constant logic

        const mainMsgDisplay = 
            <div className="sessionform-main-msg">
                {this.props.mainMsg}
            </div>;

        const subMsgDisplay = 
            <div className="sessionform-sub-msg">
                {this.props.subMsg}
            </div>;

        const usernameField = <input
            type="text"
            className="sessionform-form-field"
            onChange={this.update('username')}
            placeholder={this.props.unPlaceholder}
            value={this.state.username}
        />;

        const passwordField = <input
            type="password"
            className="sessionform-form-field"
            onChange={this.update('password')}
            placeholder={this.props.pwPlaceholder}
            value={this.state.password}
        />;

        const submitFormButton = <input
            type="submit"
            className="sessionform-submit-button"
            value={this.props.submitButtonText}
        />;

        const demoUserButton = <input
            type="submit"
            className = "sessionform-submit-button"
            value = "SIGN IN DEMO USER"
        />;

        return(
            <div className='sessionform-form-container'>
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
        );
    }
}

export default SessionForm;