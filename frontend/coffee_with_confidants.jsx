/*
Next steps: Get rid of all window testing utils/variables
*/

import React from "react"
import configureStore from "./store/store"
import ReactDOM from "react-dom"
import Confluence from "./components/confluence"

// ----- imports below are for window testing only, remove before production push!
import {
    postApiSession,
    postApiConfidant,
    deleteApiSession,
} from "./utils/session_api_utils"

// ----- window testing after creating actions, reducers, store
import { signin, logout, signup } from "./actions/session_actions"
import { getAllApiConurbations } from "./actions/conurbations_actions"

document.addEventListener("DOMContentLoaded", () => {
    let store
    if (window.currentConfidant) {
        const preloadedState = {
            session: { ccId: window.currentConfidant.id },
            entities: {
                confidants: {
                    [window.currentConfidant.id]: window.currentConfidant,
                },
            },
        }
        store = configureStore(preloadedState)
        delete window.currentConfidant
    } else {
        store = configureStore()
    }
    const rootEle = document.getElementById("root")
    ReactDOM.render(<Confluence store={store} />, rootEle)

    // -------- declarations below this line for window testing only
    window.demoUser0 = {
        username: "Joker",
        password: "hunter12",
        email: "breakintobreakout@fakemail.com",
        location_id: 1,
    }
    window.testUser0 = {
        username: "testUser0",
        password: "hunter12",
        email: "fakemail0@fakemail.com",
        location_id: 3,
    }
    window.testUser1 = {
        username: "testUser1",
        password: "hunter12",
        email: "fakemail1@fakemail.com",
        location_id: 3,
    }
    // window.postApiSession = postApiSession;
    // window.deleteApiSession = deleteApiSession;
    // window.postApiConfidant = postApiConfidant;

    // -------- window testing after creating actions, reducers, store
    window.testUser2 = {
        username: "testUser2",
        password: "hunter12",
        email: "fakemail2@fakemail.com",
        location_id: 3,
    }
    window.testUser3 = {
        username: "testUser3",
        password: "hunter12",
        email: "fakemail3@fakemail.com",
        location_id: 3,
    }
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.signin = signin
    window.logout = logout
    window.signup = signup
    window.getAllApiConurbations = getAllApiConurbations
})
