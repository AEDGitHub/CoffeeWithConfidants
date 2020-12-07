export const areConurbationsLoaded = (conurbations) =>
	Object.keys(conurbations).length > 0 ? true : false

export const areConfabsLoaded = (confabs) =>
	Object.keys(confabs).length > 0 ? true : false

export const selectAllConurbations = (conurbations) =>
	Object.keys(conurbations).map((id) => conurbations[id])

export const selectAllConfidants = (confidants) =>
	Object.keys(confidants).map((id) => confidants[id])

export const selectAllConfabs = (confabs) =>
	Object.keys(confabs).map((id) => confabs[id])

export const selectParticularConurbationByName = (
	conurbations,
	conurbationName
) =>
	Object.values(conurbations).filter(
		(conurbation) => conurbation.name === conurbationName
	)

export const selectParticularConfabById = (confabs, confabId) =>
	Object.values(confabs).filter((confab) => confab.id === confabId)

export const selectParticularConfidantById = (confidants, confidantId) =>
	Object.values(confidants).filter(
		(confidant) => confidant.id === confidantId
	)

export const selectParticularConfidantsByAttendeeId = (
	confidants,
	attendeeId
) =>
	Object.values(confidants).filter((confidant) => confidant.id === attendeeId)

export const selectParticularConfabsByLocationId = (confabs, locationId) =>
	Object.values(confabs).filter((confab) => confab.location_id === locationId)
