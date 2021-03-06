const axios = require('axios');

//Argo11
export const saveArgo11 = async (url, data) => {
    let result = {}
    url += "/api/source/argo11/"
    await axios.post(url, data)
        .then((response) => {
            if (response.status === 200) {
                result = response.data
            } else {
                result = "No response from server"
            }
        })
        .catch((err) => {
            result = "No response from server"
        })

    return result
}

export const getArgo11Count = async (url) => {
    let result = 0
    url += "/api/source/argo11/count"
    await axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                result = response.data
            } else {
                result = "No response from server"
            }
        })
        .catch((err) => {
            result = "No response from server"
        })

    return result
}

export const getArgo11Items = async (url) => {
    let result = {}
    url += "/api/source/argo11/"
    await axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                result = response.data
            }
        })
        .catch((err) => {
            console.log(err)
        })

    return result
}

export const getFirst10RowOfItem = async (url) => {
    let result = {}
    url += "/api/source/argo11/first10Rows"
    await axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                result = response.data
            }
        })
        .catch((err) => {
            console.log(err)
        })

    return result
}


export const clearArgo11 = async (url) => {
    let result = ""
    url += "/api/source/argo11/removeAll"
    await axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                result = response.data
            } else {
                result = "No response from server"
            }
        })
        .catch((err) => {
            result = "No response from server"
        })

    return result
}

export const getProgramList = async (url, departmentName) => {
    let result = {}
    url += "/api/source/argo11/programs/" + departmentName
    await axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                result = response.data
            }
        })
        .catch((err) => {
            console.log(err)
        })

    return result
}



// Grade
export const getTempExecuteResult = async (url) => {
    let result = ""
    url += "/api/report/grade/tempResult"
    await axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                result = response.data
            } else {
                result = "No response from server"
            }
        })
        .catch((err) => {
            result = "No response from server"
        })

    return result
}

