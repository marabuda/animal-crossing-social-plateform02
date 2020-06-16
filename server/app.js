// const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const Mongoose = require('./db.js')
const mongodbUp = require('./mongodb.js')
const resolve = file => path.resolve(__dirname, file)
const api = require('./api')
const cors = require('cors')
const app = express()

const mongoHost = 'mongodb://localhost:27017/mongodb'
// const cookieParser = require('cookie-parser')
// const favicon = require('serve-favicon')
// const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

// Start mongodb
mongodbUp()

app.set('port', (process.env.port || 8081))
// app.use(favicon(resolve('../dist/favicon.ico')))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// app.use(cookieParser())
app.use('/dist', express.static(resolve('../dist')))
app.use(api)

Mongoose.init({
  host: mongoHost,
  autoIndex: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  bufferCommands: false,
  useUnifiedTopology: true
})

// app.get('*', function (req, res) {
//   const fileName = db.initialized ? 'index.html' : 'setup.html'
//   const html = fs.readFileSync(resolve('../' + fileName), 'utf-8')
//   // const html = fs.readFileSync(resolve('../setup.html'), 'utf-8')
//   res.send(html)
// })

app.listen(app.get('port'), function () {
  console.log('Visit http://localhost:' + app.get('port'))
})
