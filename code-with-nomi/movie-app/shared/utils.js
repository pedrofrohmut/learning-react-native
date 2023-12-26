export const movieFmtd = (name) => strFmtBySize(name, 14)

export const nameFmtd = (name) => strFmtBySize(name, 10)

export const strFmtBySize = (name, size) =>
    name.length > size ? name.slice(0, size) + "..." : name

export const getYearFromDate = (date) => date.split("-")[0]
