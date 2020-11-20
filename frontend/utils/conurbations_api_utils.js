export const getAllApiConurbations = () => {
	return $.ajax({
		url: "/api/conurbations",
		method: "GET",
	})
}
