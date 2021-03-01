// "use strict";

// let R = require('ramda');

// let square = function square (x) { return x * x; }  
// let squares = R.chain(square, [1, 2, 3, 4, 5]); 

// document.getElementById('response').innerHTML = squares;

let WebTorrent = require("webtorrent-hybrid");

let client = new WebTorrent()

// let hosted_torrent_image_url = "magnet:?xt=urn:btih:5b14ce9dd75292f289e7500d015c40908d2d3f8a&dn=logo.png&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337"
// let hosted_torrent_image_url = "magnet:?xt=urn:btih:0e3ccf6ccb054d3fcc80a4ac8b5f41acbb31dc96&dn=banana.jpg&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com"
let torrentId = "magnet:?xt=urn:btih:adbabc7ec29526fa31446847e5bb14310652592b&dn=Artboard1.png&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337"
//"//'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
console.log("webtorrent started");
client.add(torrentId, function (torrent) {
  // Torrents can contain many files. Let's use the .mp4 file
  let file = torrent.files.find(function (file) {
    console.log("works")
    return file.name.endsWith('.png')
  })
  console.log(torrent);

  client.seed(file, function (torrent) {
        console.log('Client is seeding ' + torrent.magnetURI)
    })
  // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
  file.appendTo('body')
})

client.on('error', function (err) {
  console.log("Error!")
})
client.on('torrent', function (torrent) {
  console.log("torrent!")
})


// var WebTorrent = require('webtorrent-hybrid')
// var client2 = new WebTorrent()

// client2.seed('/seed-me.txt', function (torrent) {
//     console.log('Client is seeding ' + torrent.magnetURI)
// })