var WebTorrent = require('webtorrent-hybrid')
var client = new WebTorrent()

client.seed('./logo.png', function (torrent) {
    console.log('Client is seeding ' + torrent.magnetURI)
})