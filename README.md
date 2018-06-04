# World Cup Game Selection App

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


##### config/dev.env.js
```
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '""',
  AUTH_DOMAIN: '"-.firebaseapp.com"',
  DATABASE_URL: '"https://-.firebaseio.com"',
  PROJECT_ID: '"-"',
  STORAGE_BUCKET: '"-.appspot.com"',
  MESSAGING_SENDER_ID: '"-"',
})
```
