import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
// ----- imports below are for window testing only, remove before production push!
import { postApiSession, postApiConfidant, deleteApiSession} from './utils/session_api_utils';
// ----- window testing after creating actions, reducers, store
import { login, logout, signup} from "./actions/session_actions";



document.addEventListener("DOMContentLoaded", ()=> {
    const store = configureStore();
    const rootEle = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, rootEle);


    // -------- declarations below this line for window testing only
    window.testUser1 = {username: "testUser1", password: "hunter12", email: "fakemail@fakemail.com", location_id: 1};
    window.testUser2 = {username: "testUser2", password: "hunter12", email: "fakemail2@fakemail.com", location_id: 1};
    window.postApiSession = postApiSession;
    window.deleteApiSession = deleteApiSession;
    window.postApiConfidant = postApiConfidant;
    // -------- window testing after creating actions, reducers, store
    window.testUser3 = { username: "testUser3", password: "hunter12", email: "fakemail3@fakemail.com", location_id: 1 };
    window.testUser4 = { username: "testUser4", password: "hunter12", email: "fakemail4@fakemail.com", location_id: 1 };
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.signup = signup;

});