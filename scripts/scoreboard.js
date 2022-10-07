import { getFeed } from "./database.js";

export const catScores = () => {
    const feed = getFeed()
    let feedResponse = []
    feedResponse = feed.filter((x) => {x.catWin})
    return feedResponse.length
    
}
export const dogScores = () => {
    const feed = getFeed()
    let feedResponse = []
    feedResponse = feed.filter((x) => {!x.catWin})
    return feedResponse.length
    
}
// console.log(dogScore);
// console.log(catScore);

// export const catScores = () => {
//     const feed = getFeed()
//     const catScore = 0
//     feed.forEach(entry => {
//         if (entry.catWin === true ) {
//         catScore + 1
//         } 
//     });
//     return catScore
// }

// export const dogScores = () => {
//     const feed = getFeed()
//     const dogScore = 0
//     feed.forEach(entry => {
//         if (entry.catWin !== true ) {
//         dogScore + 1
//         }
//     });
//     return dogScore
// }

// displays database of voted on pets

//const catScore = []
//const dogScore = []
// catScore = feed.filter((x) => { return x.catWin})//
// dogScore = feed.filter((x) => { return !x.catWin})//