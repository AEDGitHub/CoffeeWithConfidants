export const getFilteredApiConfabs = () => {
    return $.ajax({
        url: "/api/confabs",
        method: "GET",
    })
}
