import React, { Component } from "react"
import { connect } from "react-redux"
import { Route, Redirect, withRouter } from "react-router-dom"

const Auth = ({ component: Component, path, loggedIn, exact }) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={(props) => {
                return !loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }}
        />
    )
}

const Protected = ({ component: Component, path, loggedIn, exact }) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={(props) => {
                return loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/signin" />
                )
            }}
        />
    )
}

const mSTP = (state) => {
    return { loggedIn: Boolean(state.session.ccId) }
}

export const AuthRoute = withRouter(connect(mSTP)(Auth))
export const ProtectedRoute = withRouter(connect(mSTP))(Protected)
