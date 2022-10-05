// fetch apis
const API = "http://localhost:8080"
const applicationState = {
    dogImage: [],
    catImage: [],
    feed: [],
    score: []
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

export const fetchFeed = async () => {
    const feed = await fetch(`${API}/feed`)
    const feedResponse = await feed.json()
    applicationState.feed = feedResponse
}

export const fetchScore = async () => {
    const catScore = await fetch(`${API}/score`)
    const dogScore = await fetch(`${API}/score`)
    const catScoreResponse = await catScore.json()
    const dogScoreResponse = await dogScore.json()
    applicationState.score = catScoreResponse, dogScoreResponse
}


export const getFeed = () => {
    const copyOfFeed = applicationState.feed.map(feed => ({ ...feed }))
    return copyOfFeed
}

export const addNewFeed = async (feed) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(feed)
    }
    const response = await fetch(`${API}/feed`, fetchOptions)
    const responseJson = await response.json()
    document.dispatchEvent(new CustomEvent("stateChanged"))
    return responseJson
  }
 