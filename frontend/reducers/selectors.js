//loading checks

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

//select all

export const selectAllConurbations = (conurbations) =>
    Object.keys(conurbations).map((id) => conurbations[id])

export const selectAllConfidants = (confidants) =>
    Object.keys(confidants).map((id) => confidants[id])

export const selectAllConfabs = (confabs) =>
    Object.keys(confabs).map((id) => confabs[id])

//select conurbations with conurbation data

export const selectParticularConurbationByName = (
    conurbations,
    conurbationName
) => {
    return Object.values(conurbations).filter(
        (conurbation) => conurbation.name === conurbationName
    )
}

//select confab with confab data

export const selectParticularConfabById = (confabs, confabId) => {
    return Object.values(confabs).filter((confab) => confab.id === confabId)
}

//select confidants with confab data

export const selectParticularConfidantByHostId = (confidants, hostId) => {
    return Object.values(confidants).filter(
        (confidant) => confidant.id === hostId
    )
}

//select confidants with conflation data

export const selectParticularConfidantsByAttendeeId = (
    confidants,
    attendeeId
) => {
    return Object.values(confidants).filter(
        (confidant) => confidant.id === attendeeId
    )
}

//select confabs with conurbation data

export const selectParticularConfabsByLocationId = (confabs, locationId) => {
    return Object.values(confabs).filter(
        (confab) => confab.location_id === locationId
    )
}
