import React from 'react';

function Flash({ message, status }) {
	return message ? (
		<div className={`flash-container-${status}`}>
			<div className="flash-msg">{message}</div>
		</div>
	) : (
		<></>
	);
}

export default Flash;
