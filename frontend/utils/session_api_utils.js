export const patchApiConfidant = (confidant) => {
    return $.ajax({
        url: `/api/confidants/${confidant.id}`,
        method: "PATCH",
        data: { confidant },
    })
}

export const postApiConfidant = (confidant) => {
    return $.ajax({
        url: "/api/confidants",
        method: "POST",
        data: { confidant },
    })
}

export const postApiSession = (confidant) => {
    return $.ajax({
        url: "/api/session",
        method: "POST",
        data: { confidant },
    })
}

export const deleteApiConfidant = (confidantId) => {
    return $.ajax({
        url: `/api/confidants/${confidantId}`,
        method: "DELETE",
    })
}

export const deleteApiSession = () => {
    return $.ajax({
        url: "/api/session",
        method: "DELETE",
    })
}
