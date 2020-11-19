import React from "react"

const Flash = ({ msg, status }) => {
	return msg ? (
		<div className={`flash-container-${status}`}>
			<div className="flash-msg">{msg}</div>
		</div>
	) : (
		<></>
	)
}

export default Flash
