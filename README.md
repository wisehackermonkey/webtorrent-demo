# webtorrent-demo
----
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<img src="assets/animation_of_creation_v1.gif" width="400">
<h2 align="center"> website that uses webtorrent to host the image files for the site</h2>
<!-- <h4 align="center">________________________</h4> -->

# Quick start
### Run with docker

##### __________________________
```bash
cd ~
git clone https://github.com/wisehackermonkey/webtorrent-demo.git
cd webtorrent-demo
docker-compose build
docker-compose up -d
``` 


<img src="assets/2021-03-01-13-06-51.png" width="400">

# Summary
<!-- ### -  *[Quick start](#Quick-start)* -->
### -  *[Installation](#Installation)*
### -  *[For developers](#For-developers)*
### -  *[Contributors](#Contributors)*
### -  *[License](#License)*


# Installation
### 
```bash
cd ~
git clone https://github.com/wisehackermonkey/webtorrent-demo.git
cd webtorrent-demo
docker-compose build
docker-compose up -d
```



<!-- ----------------- -->
<!-- # Screenshots -->
<!-- - <img src="assets/_____________" width="400">  -->
<!-- -  -->



<!-- SETUP -->
-----------------
# For developers
```bash
 git clone https://github.com/wisehackermonkey/webtorrent-demo.git
cd  webtorrent-demo/
npm install 
npm install --only=dev
# minimal
[node.js - sh: 1: node: Permission denied - Stack Overflow](https://stackoverflow.com/questions/51811564/sh-1-node-permission-denied)
npm config set user 0
npm config set unsafe-perm true
npm install --global webtorrent-hybrid
# full
npm install --global budo webtorrent-hybrid budo beefy watchify browserify exorcist
# npm install --global browserify 
npm run dev
npm install http-server --global
http-server 
```
### go to http://localhost:9966 or :8080

----------

## Publish Docker Image
```bash
docker build -t wisehackermonkey/webtorrent-demo:latest .
docker login
docker push wisehackermonkey/webtorrent-demo:latest
```
### setting up browserify
[Getting Started with Browserify ― Scotch.io](https://scotch.io/tutorials/getting-started-with-browserify)
```bash
npm install --global --save-dev browserify
npm install ramda --save
browserify src/main.js -o ./public/js/bundle.js
# Debugging
browserify --debug main.js -o bundle.js
npm install --global --save-dev exorcist
browserify main.js --debug | exorcist bundle.map.js > bundle.js
npm install --global --save-dev watchify
watchify src/main.js -o ./public/js/bundle.jss -v
npm install --save-dev beefy
npm install --global beefy

cd public
beefy ../src/main.js --live
npm run build
beefy src/main.js  --browserify  --live
npm run dev

watchify main.js -o /bundle.js -v ; beefy main.js  --browserify  --live

npm install --save-dev nodemon
nodemon -e "browserify src/main.js -o ./public/js/bundle.js ;beefy src/main.js --index=./public --cwd ./public --open --live  --browserify"

//beefy src/main.js --index=./public --cwd ./public --open --live  --browserify 
beefy src/main.js:./public/js/bundle.js --cwd ./public --browserify  --live
beefy main.js --live --browserify

watchify main.js -o static/bundle.js
# this ended up working
[budo - npm](https://www.npmjs.com/package/budo)
npm install budo --global --save-dev
# budo main.js:bundle.js --live --open  --cors #--ssl
budo src/main.js:public/js/bundle.js --live --open  --cors #--ssl
budo  --dir public/ src/main.js:public/js/bundle.js --live --open  --cors #--ssl

npm run dev


npm install http-server --save --global
```
### Running webtorrent
[WebTorrent API Documentation](https://webtorrent.io/docs)
[webtorrent/get-started.md at master · webtorrent/webtorrent](https://github.com/webtorrent/webtorrent/blob/master/docs/get-started.md)
```bash
npm install --save webtorrent

npm install webtorrent-hybrid --global --save-dev
webtorrent-hybrid
npm install webtorrent-hybrid --save
node server.js
n=logo.png

-a wss://tracker.btorrent.xyz
-a wss://tracker.openwebtorrent.com
-a udp://tracker.leechers-paradise.org:6969
-a udp://tracker.coppersurfer.tk:6969
-a udp://tracker.opentrackr.org:1337
-a udp://explodie.org:6969
-a udp://tracker.empire-js.us:1337
webtorrent-hybrid seed ./logo.png --announce wss://tracker.openwebtorrent.com  -a wss://tracker.btorrent.xyz -a wss://tracker.openwebtorrent.com -a udp://tracker.leechers-paradise.org:6969 -a udp://tracker.coppersurfer.tk:6969 -a udp://tracker.opentrackr.org:1337 -a udp://explodie.org:6969 -a udp://tracker.empire-js.us:1337 


webtorrent-hybrid seed ./banana.jpg --announce wss://tracker.openwebtorrent.com   -a wss://tracker.openwebtorrent.com -a udp://tracker.leechers-paradise.org:6969 -a udp://tracker.coppersurfer.tk:6969 -a udp://tracker.opentrackr.org:1337 -a udp://explodie.org:6969 -a udp://tracker.empire-js.us:1337 

webtorrent-hybrid seed ./assets/Artboard1.png --announce wss://tracker.openwebtorrent.com   -a wss://tracker.openwebtorrent.com -a udp://tracker.leechers-paradise.org:6969 -a udp://tracker.coppersurfer.tk:6969 -a udp://tracker.opentrackr.org:1337 -a udp://explodie.org:6969 -a udp://tracker.empire-js.us:1337 


```

# How to build webtorrent image seeding (hosting) container
```bash
cd ./docker-torrent-image-hosting
docker build -t wisehackermonkey/docker-torrent-image-hosting .
#docker run -it --net=host -v ${PWD}:/srv/webtorrent wblankenship/webtorrent

docker run -it schaurian/webtorrent-hybrid:latest  -h
docker run -it  -v webtorrent:/webtorrent --rm -p 8000:8000 schaurian/webtorrent-hybrid:latest download "adbabc7ec29526fa31446847e5bb14310652592b" --keep-seeding


docker-compose run webtorrent-hybrid 'download "adbabc7ec29526fa31446847e5bb14310652592b" --keep-seeding'

docker-compose run webtorrent-hybrid 'seed ./logo.png --announce wss://tracker.openwebtorrent.com  -a wss://tracker.btorrent.xyz -a wss://tracker.openwebtorrent.com -a udp://tracker.leechers-paradise.org:6969 -a udp://tracker.coppersurfer.tk:6969 -a udp://tracker.opentrackr.org:1337 -a udp://explodie.org:6969 -a udp://tracker.empire-js.us:1337 '


# linux
docker run -it  --rm -P `
--restart=always `
-v ${PWD}/docker-torrent-image-hosting:/webtorrent`
schaurian/webtorrent-hybrid:latest seed "/webtorrent/logo.png"  --quiet `
--announce wss://tracker.openwebtorrent.com `
-a wss://tracker.btorrent.xyz `
-a wss://tracker.openwebtorrent.com `
-a udp://tracker.leechers-paradise.org:6969 `
-a udp://tracker.coppersurfer.tk:6969 `
-a udp://tracker.opentrackr.org:1337 `
-a udp://explodie.org:6969 `
-a udp://tracker.empire-js.us:1337


# Powershell
docker run -it  --rm -P `
--restart=always `
-v ${PWD}/docker-torrent-image-hosting:/webtorrent`
schaurian/webtorrent-hybrid:latest seed "/webtorrent/logo.png"  --quiet `
--announce wss://tracker.openwebtorrent.com `
-a wss://tracker.btorrent.xyz `
-a wss://tracker.openwebtorrent.com `
-a udp://tracker.leechers-paradise.org:6969 `
-a udp://tracker.coppersurfer.tk:6969 `
-a udp://tracker.opentrackr.org:1337 `
-a udp://explodie.org:6969 `
-a udp://tracker.empire-js.us:1337


docker run -it  -v ${PWD}/docker-torrent-image-hosting:/webtorrent --rm -p 8000:8000 schaurian/webtorrent-hybrid:latest seed "/webtorrent/logo.png"  --quiet --announce wss://tracker.openwebtorrent.com  -a wss://tracker.btorrent.xyz -a wss://tracker.openwebtorrent.com -a udp://tracker.leechers-paradise.org:6969 -a udp://tracker.coppersurfer.tk:6969 -a udp://tracker.opentrackr.org:1337 -a udp://explodie.org:6969 -a udp://tracker.empire-js.us:1337

docker-compose run webtorrent-hybrid seed "/webtorrent/banana.jpg"  --quiet --announce wss://tracker.openwebtorrent.com  -a wss://tracker.btorrent.xyz -a wss://tracker.openwebtorrent.com -a udp://tracker.leechers-paradise.org:6969 -a udp://tracker.coppersurfer.tk:6969 -a udp://tracker.opentrackr.org:1337 -a udp://explodie.org:6969 -a udp://tracker.empire-js.us:1337


docker-compose run webtorrent-hybrid seed "/webtorrent/banana.jpg"  --quiet --announce wss://tracker.openwebtorrent.com  -a wss://tracker.btorrent.xyz -a wss://tracker.openwebtorrent.com -a udp://tracker.leechers-paradise.org:6969 -a udp://tracker.coppersurfer.tk:6969 -a udp://tracker.opentrackr.org:1337 -a udp://explodie.org:6969 -a udp://tracker.empire-js.us:1337

docker-compose up



----
try 2
cd ./docker-torrent-image-hosting
docker build -t wisehackermonkey/docker-torrent-image-hosting .
docker run -it --rm -P -v ${PWD}/:/webtorrent wisehackermonkey/docker-torrent-image-hosting

```
### try 3 now ith docker compose
```bash
docker-compose build 
docker-compose up
```
### how to seed multiple files
```bash
webtorrent-hybrid seed ./logo.png ./banana.jpg
```


### continerizing broswerfiy build process
```bash
node ./node_modules/browserify/bin/browserify  main.js -o ./public/js/bundle.js
docker-compose build 
docker-compose up


npm i -g serve    
# [Node.js quick file server (static files over HTTP) - Stack Overflow](https://stackoverflow.com/questions/16333790/node-js-quick-file-server-static-files-over-http)
# serve public -p 8000 -d true
serve ${PWD}\\public -p 8000 -d true
http-server public
```
# how to host a new image
### add image to images/*
### `example cat.jpg`
### change docker-compose.yaml

#### from
```bash
        image: 'schaurian/webtorrent-hybrid:latest'
        command: ["seed","./banana2.png","--quiet",.......]
```
#### to
```bash
        image: 'schaurian/webtorrent-hybrid:latest'
        command: ["seed","./cat.jpg","--quiet",.......]
```
### run  webtorrent-hybrid server
```bash
docker-compose run webtorrent-hybrid
```
### grab the magn: link that it outputs ex:
```bash
magnet:?xt=urn:btih:8a1f08b91487de78d513e17799ac15c75bc864e6&dn=cat.jpg&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.fastcast.nz
```
### modify ./src/main.js set the  verable `let torrentId ="..."` to be the result of the magnit link from prevois step
```javascript
let torrentId = "magnet:?xt=urn:btih:8a1f08b91487de78d513e17799ac15c75bc864e6&dn=banana2.png&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.fastcast.nz"
```
### if you gett an error that looks like this it means that you forgot to change the image extention type within src/main.js
### also change the file ending to match your image type EX: .png with .endsWith('.png') or .jpg with endsWith('.jpg')
### `src/main.js`
#### From 
```javascript
let file = torrent.files.find(function (file) {
......
    return file.name.endsWith('.png')
  })
```
#### to
```javascript
let file = torrent.files.find(function (file) {
......
    return file.name.endsWith('.jpg')
  })
```
### rebuild and run docker-compose
```bash
docker-compose build
docker-compose down
docker-compose up -d

```
### build in one line 
#### *unix  
```bash
docker-compose build && docker-compose down && docker-compose up
```
#### powershell
```bash
docker-compose build ; docker-compose down ; docker-compose up
```
### visit 
## Success !!!
<br>
-----------------
# Contributors

[![](https://contrib.rocks/image?repo=wisehackermonkey/webtorrent-demo)](https://github.com/wisehackermonkey/webtorrent-demo/graphs/contributors)

##### Made with [contributors-img](https://contrib.rocks).

-----------------
# License
#### MIT © wisehackermonkey
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
```bash
by oran collins
github.com/wisehackermonkey
oranbusiness@gmail.com
______________________
```