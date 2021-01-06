export const shorterConurbationName = (conurbationName) =>
	conurbationName.split(',')[0]

export const restOfConurbationName = (conurbationName) => {
	const conurbationNameArray = conurbationName.split(', ')
	return conurbationNameArray[1] + ', ' + conurbationNameArray[2]
}

export const filterConfabsByConfabLocationId = (confabs, locationId) =>
	Object.values(confabs).filter((confab) => confab.location_id === locationId)

export const sortConfabsByStartDate = (confabs) =>
	confabs.sort(
		(confab, otherConfab) =>
			confab.start_time_in_ms - otherConfab.start_time_in_ms
	)

export const filterConfidantsByConfabHostId = (confidants, hostId) =>
	Object.values(confidants).filter((confidant) => confidant.id === hostId)

export const determineWhetherConfidantIsAttending = (confab, confidantId) => {
	return confab.attendee_ids.includes(confidantId)
}
