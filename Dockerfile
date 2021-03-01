FROM node:12.18-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN  npm --global config set user root && npm install --production --silent && mv node_modules ../
COPY . .
RUN npm --global config set user root && \
    npm install --global --unsafe-perm browserify && browserify ./main.js -o ./bundle.js
EXPOSE 8080
CMD ["node", "src/main.js"]
