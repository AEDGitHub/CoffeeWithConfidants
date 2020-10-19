export const areConurbationsLoaded = (conurbations) => {
    if (Object.keys(conurbations).length > 0) {
        return true
    } else {
        return false
    }
}

export const areConfabsLoaded = (confabs) => {
    if (Object.keys(confabs).length > 0) {
        return true
    } else {
        return false
    }
}

export const selectAllConurbations = (conurbations) =>
    Object.keys(conurbations).map((id) => conurbations[id])

export const selectAllConfidants = (confidants) =>
    Object.keys(confidants).map((id) => confidants[id])

export const selectAllConfabs = (confabs) =>
    Object.keys(confabs).map((id) => confabs[id])

export const selectParticularConurbationByName = (
    conurbations,
    conurbationName
) => {
    return Object.values(conurbations).filter(
        (conurbation) => conurbation.name === conurbationName
    )
}

export const selectParticularConfabById = (confabs, confabId) => {
    return Object.values(confabs).filter((confab) => confab.id === confabId)
}

export const selectParticularConfidantById = (confidants, confidantId) => {
    return Object.values(confidants).filter(
        (confidant) => confidant.id === confidantId
    )
}

export const selectParticularConfidantsByAttendeeId = (
    confidants,
    attendeeId
) => {
    return Object.values(confidants).filter(
        (confidant) => confidant.id === attendeeId
    )
}

export const selectParticularConfabsByLocationId = (confabs, locationId) => {
    return Object.values(confabs).filter(
        (confab) => confab.location_id === locationId
    )
}
