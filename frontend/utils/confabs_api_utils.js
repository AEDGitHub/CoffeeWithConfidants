export const getFilteredApiConfabs = (confabId = null) => {
    return $.ajax({
        url: confabId ? `/api/confabs/${confabId}` : "/api/confabs",
        method: "GET",
    })
}
