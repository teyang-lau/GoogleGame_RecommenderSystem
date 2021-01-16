// Script for scraping games information from google play store using google-play-scraper in Node.JS. 
// To get the game appIDs for scraping reviews using another Python package

var gplay = require('google-play-scraper');
const fs = require('fs');

var categories = ['GAME', 'GAME_ACTION', 'GAME_ADVENTURE', 'GAME_ARCADE', 'GAME_BOARD', 'GAME_CARD',
'GAME_CASINO', 'GAME_CASUAL', 'GAME_EDUCATIONAL', 'GAME_MUSIC', 'GAME_PUZZLE', 'GAME_RACING',
'GAME_ROLE_PLAYING', 'GAME_SIMULATION', 'GAME_SPORTS', 'GAME_STRATEGY', 'GAME_TRIVIA', 'GAME_WORD']

//var collections = ['TOP_FREE', 'TOP_PAID', 'GROSSING', 'NEW_FREE', 'NEW_PAID']
var collections = ['TOP_FREE']


// gplay.list({
//     category: gplay.category.GAME_SPORTS,
//     collection: gplay.collection.NEW_FREE,
//     num: 2
//   })
//   .then(console.log, console.log);

for (let col of collections) {
    for (let cat of categories) {
        const file = fs.createWriteStream('./Data/google_games/AppID_' + col + '_' + cat + '.txt');
        gplay.list({
            category: gplay.category[cat],
            collection: gplay.collection[col],
            num: 500 // only 200 for most times
        })
        .then(result => JSON.stringify(result))
        .then(text => file.write(text));
    }
}

