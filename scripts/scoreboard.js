import { getFeed } from "./database.js";

export const catScores = () => {
    const feed = getFeed()
    const catScore = feed.filter(x => x.catWin === true).length
    const catScoreHtml = `<h2>Cat votes: ${catScore}</h2>`
    return catScoreHtml
    
}
export const dogScores = () => {
    const feed = getFeed()
    const dogScore = feed.filter(x => x.catWin === false).length
    const dogScoreHtml = `<h2>Dog Votes: ${dogScore}</h2>`
    return dogScoreHtml
    
}
// console.log(dogScore);
// console.log(catScore);

// displays database of voted on pets

//const catScore = []
//const dogScore = []
// catScore = feed.filter((x) => { return x.catWin})//
// dogScore = feed.filter((x) => { return !x.catWin})//