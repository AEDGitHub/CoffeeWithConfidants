export const shorterConurbationName = (conurbationName) =>
    conurbationName.split(",")[0]

export const filterConfabsByConfabLocationId = (confabs, locationId) =>
    Object.values(confabs).filter((confab) => confab.location_id === locationId)

export const filterConfidantsByConfabHostId = (confidants, hostId) =>
    Object.values(confidants).filter((confidant) => confidant.id === hostId)

export const convertDatetimeStringToObject = (datetimeString) => {
    const finalObj = {}

    const arrayOfWeekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    const datetimeObject = new Date(datetimeString)
    const datetimeObjectString = datetimeObject.toString()
    const usableDatetimeArray = datetimeObjectString.split(" ")

    finalObj["day"] = arrayOfWeekdays[datetimeObject.getDay()]
    finalObj["month"] = usableDatetimeArray[1]
    finalObj["dateNum"] = usableDatetimeArray[2]
    finalObj["hour"] = datetimeObject.getHours()

    return finalObj
}
