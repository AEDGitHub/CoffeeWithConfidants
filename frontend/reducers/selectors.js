//!!loading checks

export const areConurbationsLoaded = ({ entities }) => {
    if (Object.keys(entities.conurbations).length > 0) {
        return true
    } else {
        return false
    }
}

export const areConfabsLoaded = ({ entities }) => {
    if (Object.keys(entities.confabs).length > 0) {
        return true
    } else {
        return false
    }
}

//!!select all

export const selectAllConurbations = ({ entities }) =>
    Object.keys(entities.conurbations).map((id) => entities.conurbations[id])

export const selectAllConfidants = ({ entities }) =>
    Object.keys(entities.confidants).map((id) => entities.confidants[id])

export const selectAllConfabs = ({ entities }) =>
    Object.keys(entities.confabs).map((id) => entities.confabs[id])

//!!select conurbations with conurbation data

export const selectParticularConurbationByName = (
    { entities },
    conurbationName
) => {
    return Object.values(entities.conurbations).filter(
        (conurbation) => conurbation.name === conurbationName
    )
}

//!!select confab with confab data

export const selectParticularConfabById = ({ entities }, confabId) => {
    return Object.values(entities.confabs).filter(
        (confab) => confab.id === confabId
    )
}

//!!select confidants with confab data

export const selectParticularConfidantByHostId = ({ entities }, hostId) => {
    return Object.values(entities.confidants).filter(
        (confidant) => confidant.id === hostId
    )
}

//!!select confabs with conurbation data

export const selectParticularConfabsByLocationId = (
    { entities },
    locationId
) => {
    return Object.values(entities.confabs).filter(
        (confab) => confab.location_id === locationId
    )
}
