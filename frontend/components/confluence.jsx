import React from "react"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import ScrollToTop from "./scrolltotop/scrolltotop"
import Concenter from "./concenter/concenter"
import Concerto from "./concerto/concerto"
import Conclusion from "./conclusion/conclusion"

const Confluence = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <ScrollToTop>
                <Concenter />
                <Concerto />
                <Conclusion />
            </ScrollToTop>
        </HashRouter>
    </Provider>
)

export default Confluence
