// fetch apis
const API = "http://localhost:8080"
const applicationState = {
    dogImage: [],
    catImage: [],
    history: []
}

export const fetchCat = async () => {
    const catImage = await fetch(`https://api.thecatapi.com/v1/images/search`)
    const catImageResponse = await catImage.json()
    applicationState.catImage = catImageResponse
}

export const fetchDog = async () => {
    const dogImage = await fetch(`https://api.thedogapi.com/v1/images/search`)
    const dogImageResponse = await dogImage.json()
    applicationState.dogImage = dogImageResponse
}

export const fetchHistory = async () => {
    const history = await fetch(`${API}/history`)
    const historyResponse = await history.json()
    applicationState.history = historyResponse
}

export const getHistory = () => {
    const copyOfHistory = applicationState.history.map(history => ({ ...history }))
    return copyOfHistory
}

export const addNewHistory = async (history) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(history)
    }
    const response = await fetch(`${API}/history`, fetchOptions)
    const responseJson = await response.json()
    document.dispatchEvent(new CustomEvent("stateChanged"))
    return responseJson
  }
  