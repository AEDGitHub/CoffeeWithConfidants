export const postApiConflation = (confabId) => {
    return $.ajax({
        url: `api/confabs/${confabId}/conflations`,
        method: "POST",
    })
}
