export const getWeekdayStringFromDateObject = (dateObj) => {
	const weekdayObj = {
		0: "Sunday",
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday",
	}
	return weekdayObj[dateObj.getDay()]
}

export const getMonthStringFromDateObject = (dateObj) => {
	const monthStrObj = {
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
	return monthStrObj[dateObj.getMonth()]
}

export const getTruncatedMonthStringFromDateObject = (dateObj) => {
	const monthStrObj = {
		0: "Jan",
		1: "Feb",
		2: "Mar",
		3: "Apr",
		4: "May",
		5: "Jun",
		6: "Jul",
		7: "Aug",
		8: "Sept",
		9: "Oct",
		10: "Nov",
		11: "Dec",
	}
	return monthStrObj[dateObj.getMonth()]
}

export const getPrefixHoursStringFromDateObject = (dateObj) => {
	const currentHours = dateObj.getHours()
	return currentHours > 9
		? currentHours.toString()
		: "0" + currentHours.toString()
}

export const getFullHoursStringFromDateObject = (dateObj) => {
	const suffixStr = "00"
	return getHoursPrefixStringFromDateObject(dateObj) + suffixStr
}

export const convertDatetimeStringToObject = (datetimeString) => {
	const finalObj = {}

	// const weekdayObj = {
	// 	0: "Sunday",
	// 	1: "Monday",
	// 	2: "Tuesday",
	// 	3: "Wednesday",
	// 	4: "Thursday",
	// 	5: "Friday",
	// 	6: "Saturday",
	// }

	// const monthObj = {
	// 0: "January",
	// 1: "February",
	// 2: "March",
	// 3: "April",
	// 4: "May",
	// 5: "June",
	// 6: "July",
	// 7: "August",
	// 8: "September",
	// 9: "October",
	// 10: "November",
	// 11: "December",
	// }

	const datetimeObject = new Date(datetimeString)
	const datetimeObjectString = datetimeObject.toString()
	const usableDatetimeArray = datetimeObjectString.split(" ")

	// finalObj["day"] = weekdayObj[datetimeObject.getDay()]
	finalObj["month"] = usableDatetimeArray[1]
	// finalObj["fullMonth"] = monthObj[datetimeObject.getMonth()]
	finalObj["dateNum"] = usableDatetimeArray[2]
	finalObj["hour"] = datetimeObject.getHours()

	return finalObj
}
