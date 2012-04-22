// scrape.js
// get pictures and names for celebrities

// imports
var request = require('request')

// class variables
var url = 'http://www.forbes.com/wealth/celebrities/list'

startScrape(url)

function startScrape(url) {

	request(url, function () {})

}
