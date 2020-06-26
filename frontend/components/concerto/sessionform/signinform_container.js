import React from 'react';
import { signin } from '../../../actions/session_actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './sessionform';

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'signin',
        navLink: <Link to="/signup" className="form-link">Not a confidant yet? Squad up here!</Link>,
        pwPlaceholder: "Password",
    }
}

const mDTP = dispatch => {
    return {
        processForm: confidant => dispatch(signin(confidant)),
    }
}

export default connect(mSTP, mDTP)(SessionForm);