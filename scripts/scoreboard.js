import { getFeed } from "./database.js";

export const catScores = () => {
    const feed = getFeed()
     feed.filter((x) => { return x.catWin})
}

export const dogScores = () => {
    const feed = getFeed()
     feed.filter((x) => { return !x.catWin} )
}

const catScore = catScores().length
const dogScore = dogScores().length

document.getElementById('catScore').innerHTML = catScore
document.getElementById('dogScore').innerHTML = dogScore



// displays database of voted on pets

//const catScore = []
//const dogScore = []
// catScore = feed.filter((x) => { return x.catWin})//
// dogScore = feed.filter((x) => { return !x.catWin})//