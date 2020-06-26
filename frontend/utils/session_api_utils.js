export const postApiConfidant = confidant => {
    return $.ajax({
        url: "/api/confidants",
        method: "POST",
        data: { confidant }
    })
}

export const postApiSession = confidant => {
    return $.ajax({
        url: "/api/session",
        method: "POST",
        data: { confidant }
    })
}

export const deleteApiSession = () => {
    return $.ajax({
        url: "/api/session",
        method: "DELETE",
    })
}