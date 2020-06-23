import React from "react";
import ReactDOM from "react-dom";
// ----- imports below are for window testing only, remove before production push!
import { postApiSession, postApiConfidant, deleteApiSession} from './utils/session_api_util';

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to CWC!</h1>, root);

    // -------- declarations below this line for window testing only
    window.testUser1 = {username: "testUser1", password: "hunter12", email: "fakemail@fakemail.com", location_id: 1};
    window.testUser2 = {username: "testUser2", password: "hunter12", email: "fakemail2@fakemail.com", location_id: 1};
    window.postApiSession = postApiSession;
    window.deleteApiSession = deleteApiSession;
    window.postApiConfidant = postApiConfidant;
});