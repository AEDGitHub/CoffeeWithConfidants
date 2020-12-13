export const convertDatetimeStringToObject = (datetimeString) => {
	const finalObj = {}

	const weekdayObj = {
		0: "Sunday",
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday",
	}

	const monthObj = {
		0: "January",
		1: "February",
		2: "March",
		3: "April",
		4: "May",
		5: "June",
		6: "July",
		7: "August",
		8: "September",
		9: "October",
		10: "November",
		11: "December",
	}

	const datetimeObject = new Date(datetimeString)
	const datetimeObjectString = datetimeObject.toString()
	const usableDatetimeArray = datetimeObjectString.split(" ")

	finalObj["day"] = weekdayObj[datetimeObject.getDay()]
	finalObj["month"] = usableDatetimeArray[1]
	finalObj["fullMonth"] = monthObj[datetimeObject.getMonth()]
	finalObj["dateNum"] = usableDatetimeArray[2]
	finalObj["hour"] = datetimeObject.getHours()

	return finalObj
}
