import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import Contraption from "./contraption";

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Contraption />
        </HashRouter>
    </Provider>
);

export default Root;
