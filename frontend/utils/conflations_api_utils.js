export const postApiConflation = (confabId) => {
	return $.ajax({
		url: `api/confabs/${confabId}/conflations`,
		method: "POST",
	})
}

export const deleteApiConflation = (confabId, confidantId) => {
	return $.ajax({
		url: `api/confabs/${confabId}/conflations/${confidantId}`,
		method: "DELETE",
	})
}
