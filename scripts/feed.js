import { getFeed } from "./database.js";

// diplays previous contestants

export const displayFeed = () => {
    const feed = getFeed()
    let html = ""
    feed.forEach(entry => {
        html += `
    <div class = "dogFeed">
        <div class ='dogPicBox'><img src = ${entry.dogUrl} alt ="Dog picture" class ="dogFeedPic ${entry.catWin ? '' : 'winner'}"></div>
    </div>
    <div><iframe src="https://giphy.com/embed/IeiONINKriNrbSygju" width="120" height="250" frameBorder="0" class="giphy-embed vsFeedGif" allowFullScreen></iframe></div>
    <div class = "catFeed">
        <div class ='catPicBox'><img src = ${entry.catUrl} alt ="cat picture" class ="catFeedPic ${entry.catWin ? 'winner' : ''}"></div>
    </div>`
    })
    return html
}