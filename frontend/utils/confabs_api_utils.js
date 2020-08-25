export const getAllApiConfabs = () => {
    return $.ajax({
        url: "/api/confabs",
        method: "GET",
    })
}
