export const postApiConfidant = (confidant) => (
    $.ajax({
        url: "/api/confidants",
        method: "POST",
        data: { confidant }
    })
)


export const postApiSession = (confidant) => (
    $.ajax({
        url: "/api/session",
        method: "POST",
        data: { confidant }
    })
)


export const deleteApiSession = () => (
    $.ajax({
        url: "/api/session",
        method: "DELETE",
    })
)