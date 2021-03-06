# webtorrent-demo
----
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<img src="assets/2021-03-01-13-06-51.png" width="400">
<h2 align="center"> website that uses webtorrent to host the image files for the site</h2>
<!-- <h4 align="center">________________________</h4> -->

# Quick start
### __________________
<!-- 
##### __________________________
```bash
``` 
-->

# Summary
<!-- ### -  *[Quick start](#Quick-start)*
### -  *[Installation](#Installation)*
### -  *[For developers](#For-developers)* -->
### -  *[Contributors](#Contributors)*
### -  *[License](#License)*




# Installation
```bash
 git clone https://github.com/wisehackermonkey/webtorrent-demo.git
cd  webtorrent-demo/
npm install 
npm install --only=dev
# minimal
npm config set user 0
npm config set unsafe-perm true
npm install --global webtorrent-hybrid
# full
npm install --global budo webtorrent-hybrid budo beefy watchify browserify exorcist
npm install --global browserify
npm run dev
```
### go to http://localhost:9966


<!-- ----------------- -->
<!-- # Screenshots -->
<!-- - <img src="assets/_____________" width="400">  -->
<!-- -  -->



<!-- SETUP -->
-----------------
# For developers
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
budo main.js:bundle.js --live --open  --cors #--ssl
npm run dev


```
### Running webtorrent
[WebTorrent API Documentation](https://webtorrent.io/docs)
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
### docker-compose run webtorrent-hybrid
### grab the magn: link that it outputs ex:
```bash
magnet:?xt=urn:btih:8a1f08b91487de78d513e17799ac15c75bc864e6&dn=cat.jpg&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.fastcast.nz
```
### modify ./src/main.js set the  verable `let torrentId ="..."` to be the result of the magnit link from prevois step
```javascript
let torrentId = "magnet:?xt=urn:btih:8a1f08b91487de78d513e17799ac15c75bc864e6&dn=banana2.png&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.fastcast.nz"
```
### rebuild and run docker-compose
```bash
docker-compose build

docker-compose up -d
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

















<!-- ---------------------------------- -->
<!-- FULL -->
<!-- ---------------------------------- -->

<!-- # webtorrent-demo -->
<!-- ---- -->
<!-- 
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<img src="assets/NNNNNNNNNNNNN" width="400">
<h2 align="center">____________________</h2>
<h4 align="center">________________________</h4>
 -->

<!-- 

# Quick start
### __________________
##### __________________________
```bash
```

 -->


<!-- 

# Summary
### -  *[Quick start](#Quick-start)*
### -  *[Live Demo](#Live-demo)*
### -  *[Installation](#Installation)*
### -  *[Screenshots](#Screenshots)*
### -  *[License](#License)*
### -  *[Features](#Features)*
### -  *[For developers](#For-developers)*
### -  *[Todo](#TODO)*
### -  *[Related](#Related)*
### -  *[Contributors](#Contributors)*
 -->



<!-- ----------------- -->
<!-- <img src="assets/KKKKKKKKKKK" width="400"> -->
<!-- # [Live Demo](https://www._____________.com) -->





<!-- 
# Installation
### 
```bash
``` 
-->




<!-- 

-----------------
# Screenshots
- <img src="assets/_____________" width="400"> 
- 
-->



<!-- 

# Features
- [x] ______
- [ ] ______

-->


<!-- 
-----------------
# For developers
### 
```bash
```
 -->





<!-- -----------------
# TODO
- [x] ___________
- [ ] ___________ 
-->

<!-- 
-----------------
# Built with
- #### ________________
-->





<!-- -----------------
# Related 
### [_________](https://www.____________.com)
 -->





<!-- 
-----------------
# Contributors

[![](https://contrib.rocks/image?repo=wisehackermonkey/webtorrent-demo)](https://github.com/wisehackermonkey/webtorrent-demo/graphs/contributors)

##### Made with [contributors-img](https://contrib.rocks).

-----------------
# License
#### MIT © wisehackermonkey
[![MIT](https://img.shields.io/github/license/wisehackermonkey/webtorrent-demo.svg)](https://github.com/wisehackermonkey/webtorrent-demo/blob/master/LICENSE)
-->

<!-- 
```bash
by oran collins
github.com/wisehackermonkey
oranbusiness@gmail.com
______________________
``` 
-->

<!-- ---------------------------------- -->
<!-- EXTRAS -->
<!-- ----------------------------------- -->
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<!-- 
[![Javascript](https://img.shields.io/badge/Javascript-Enabled-lightgreen.svg)](https://shields.io/) 
[![forthebadge made-with-python](https://forthebadge.com/images/badges/made-with-python.svg)](https://www.python.org/)
![Python](https://img.shields.io/badge/Python-Enabled-<COLOR>.svg)
![P5.js](https://img.shields.io/badge/P5.js-Enabled-pink.svg)
[![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)](https://shields.io/)
[![GitHub release](https://img.shields.io/github/release/wisehackermonkey/webtorrent-demo.svg)](https://GitHub.com/wisehackermonkey/webtorrent-demo/releases/)
[![GitHub tag](https://img.shields.io/github/tag/wisehackermonkey/webtorrent-demo.svg)](https://GitHub.com/wisehackermonkey/webtorrent-demo/tags/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/wisehackermonkey/webtorrent-demo.svg)](https://GitHub.com/wisehackermonkey/webtorrent-demo/pull/)
[![Website perso.crans.org](https://img.shields.io/website-up-down-green-red/http/www.orancollins.com.svg)](http://www.orancollins.com/) 
    -->

<!-- 
# https://yuml.me/diagram/plain/activity/draw
### (start)->[AAAAAAAA]<aaaaa->(BBBBBB)->(end) 

# Diagram
## 
```bash
```
 -->

<!-- 

# List
- 
- 
- 



# Toggle List (NO FORMATTING)
<details><summary>AAAAAAAA</summary>
<details><summary>Hidden A</summary>
</details>
</details>

<details><summary>BBBBBBBBB</summary>
<details><summary>Hidden B</summary>
</details>
</details>

<details><summary>CCCCCCCCC</summary>
</details>



# Toggle list with formatting
<details><summary>Level 1</summary></details>

<details><summary>&emsp;BBBBBBBBB</summary></details>
<details><summary>&emsp;&emsp;CCCCCCCCC</summary></details>
<details><summary>&emsp;&emsp;&emsp;DDDDDDDDD</summary></details>


# Toggle list Nested
<details><summary>Level 1</summary>

<details><summary>&emsp;BBBBBBBBB</summary>
<details><summary>&emsp;&emsp;CCCCCCCCC</summary>
<details><summary>&emsp;&emsp;&emsp;DDDDDDDDD</summary>

</details></details></details></details></details></details></details></details></details></details></details></details></details></details></details></details></details></details>

# Keyboard Commnand
### <kbd>Command/ctrl + R</kbd> 

# Installation
### 
```bash
cd ~
git clone https://github.com/wisehackermonkey/webtorrent-demo.git
cd webtorrent-demo
pip install -r requirements.txt
npm install
```

# Docker
### Build
```bash
cd ~
git clone https://github.com/wisehackermonkey/webtorrent-demo.git
cd webtorrent-demo
docker build -t wisehackermonkey/webtorrent-demo:latest .  
```
### Run
```bash
docker run -it --rm --name wisehackermonkey/webtorrent-demo:latest  
```
### Docker-compose
```bash
docker-compose build
docker-compose up 
```



# Publish Docker Image
```bash
docker build -t wisehackermonkey/webtorrent-demo:latest .
docker login
docker push wisehackermonkey/webtorrent-demo:latest
```

 -->