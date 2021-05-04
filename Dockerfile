FROM node:latest
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install && npm install -g browserify http-server &&  mv node_modules ../
RUN npm install  &&  mv node_modules ../

# FROM schaurian/webtorrent-hybrid:latest
COPY . .
RUN browserify src/main.js -o ./public/js/bundle.js
RUN python3 -V
RUN ls
EXPOSE 8080
# [http-server - npm](https://www.npmjs.com/package/http-server)
# CMD ["python3","-m","http.server","8000","--directory","public"]
CMD ["http-server","public"]
