export const getFilteredApiConfabs = (confabId) => {
    return $.ajax({
        url: confabId ? `/api/confabs/${confabId}` : "/api/confabs",
        method: "GET",
    })
}

export const postApiConfab = (conurbationId, confab) => {
    return $.ajax({
        url: `/api/conurbations/${conurbationId}/confabs`,
        method: "POST",
        data: { confab },
    })
}
