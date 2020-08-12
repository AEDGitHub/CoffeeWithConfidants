export const areConurbationsLoaded = ({ entities }) => {
    if (Object.keys(entities.conurbations).length > 0) {
        return true;
    } else {
        return false;
    }
};

export const getAllConurbations = ({ entities }) =>
    Object.keys(entities.conurbations).map((id) => entities.conurbations[id]);

export const getParticularConurbation = ({ entities }, conurbationName) => {
    return Object.values(entities.conurbations).filter(
        (conurbation) => conurbation.name === conurbationName
    );
};
