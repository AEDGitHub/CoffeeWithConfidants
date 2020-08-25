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

export const getAllConurbations = ({ entities }) =>
    Object.keys(entities.conurbations).map((id) => entities.conurbations[id])

export const getParticularConurbation = ({ entities }, conurbationName) => {
    return Object.values(entities.conurbations).filter(
        (conurbation) => conurbation.name === conurbationName
    )
}

export const getAllConfabs = ({ entities }) =>
    Object.keys(entities.confabs).map((id) => entities.confabs[id])

export const getParticularConfab = ({ entities }, confabName) => {
    return Object.values(entities.confabs).filter(
        (confab) => confab.name === confabName
    )
}
