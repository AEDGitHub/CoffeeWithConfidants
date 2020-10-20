import React from "react"
import Modal from "react-modal"
import configureStore from "./store/store"
import ReactDOM from "react-dom"
import Confluence from "./components/confluence"

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
    Modal.setAppElement("#root")
    ReactDOM.render(<Confluence store={store} />, rootEle)
})
