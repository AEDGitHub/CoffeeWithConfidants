import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"

function ScrollToTop({ history, children }) {
	useEffect(() => {
		const quitListening = history.listen(() => {
			window.scrollTo(0, 0)
		})
		return () => {
			quitListening()
		}
	}, [])

	return <>{children}</>
}

//shout-out to zurfyx on SO for this gem: https://stackoverflow.com/a/54343182

export default withRouter(ScrollToTop)
