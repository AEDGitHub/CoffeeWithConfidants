import React from "react"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import Concenter from "./concenter/concenter"
import Concerto from "./concerto/concerto"
import Conclusion from "./conclusion/conclusion"

const Confluence = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Concenter />
            <Concerto />
            <Conclusion />
        </HashRouter>
    </Provider>
)

export default Confluence
