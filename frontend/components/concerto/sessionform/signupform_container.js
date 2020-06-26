import React from 'react';
import { signup } from '../../../actions/session_actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './sessionform';

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/signin" className="form-link">Already a confidant? Get back in here!</Link>,
        pwPlaceholder: "Password (7 characters or more, Ace!)",
    }
}

const mDTP = dispatch => {
    return {
        processForm: confidant => dispatch(signup(confidant)),
    }
}

export default connect(mSTP, mDTP)(SessionForm);