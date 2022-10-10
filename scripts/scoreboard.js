import { getFeed } from "./database.js";

export const catScores = () => {
    const feed = getFeed()
    const catScore = feed.filter(x => x.catWin === true).length
    return catScore
    
}
export const dogScores = () => {
    const feed = getFeed()
    const dogScore = feed.filter(x => x.catWin === false).length
    return dogScore
    
}
// console.log(dogScore);
// console.log(catScore);

// displays database of voted on pets

//const catScore = []
//const dogScore = []
// catScore = feed.filter((x) => { return x.catWin})//
// dogScore = feed.filter((x) => { return !x.catWin})//