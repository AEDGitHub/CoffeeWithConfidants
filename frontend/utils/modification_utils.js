export const shorterConurbationName = (conurbationName) =>
    conurbationName.split(",")[0]

export const filterConfabsByConfabLocationId = (confabs, locationId) =>
    Object.values(confabs).filter((confab) => confab.location_id === locationId)

export const filterConfidantsByConfabHostId = (confidants, hostId) =>
    Object.values(confidants).filter((confidant) => confidant.id === hostId)

// export const convertDatetimeToDay = (datetime) => {
//     const arrayOfWeekdays = [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//     ]
//     return arrayOfWeekdays[datetime.getDay()]
// }
