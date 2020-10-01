export const getFilteredApiConfabs = (confabId) => {
    return $.ajax({
        url: confabId ? `/api/confabs/${confabId}` : "/api/confabs",
        method: "GET",
    })
}
