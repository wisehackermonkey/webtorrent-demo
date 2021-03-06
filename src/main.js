let WebTorrent = require("webtorrent-hybrid");

let client = new WebTorrent()

// let hosted_torrent_image_url = "magnet:?xt=urn:btih:5b14ce9dd75292f289e7500d015c40908d2d3f8a&dn=logo.png&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337"
// let torrentId = hosted_torrent_image_url//'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
// ------------
// plain banana stock photo let hosted_torrent_image_url = "magnet:?xt=urn:btih:0e3ccf6ccb054d3fcc80a4ac8b5f41acbb31dc96&dn=banana.jpg&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com"
// ------------
// banana with bittorrent logo photoshoped on it.
// photo is found in images
// images/banana2.png
let torrentId = "magnet:?xt=urn:btih:8a1f08b91487de78d513e17799ac15c75bc864e6&dn=banana2.png&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.fastcast.nz"

console.log("webtorrent started");
client.add(torrentId, function (torrent) {
  // Torrents can contain many files. Let's use the .mp4 file
  let file = torrent.files.find(function (file) {
    console.log("works")
    return file.name.endsWith('.jpg')
  })

  client.seed(file, function (torrent) {
        console.log('Client is seeding ' + torrent.magnetURI)
    })
  // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
  file.appendTo('body')
})