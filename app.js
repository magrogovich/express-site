// modules
var express = require('express')
var fs = require('fs')

// modules routes
var index = require('./routes/index')
var contact = require('./routes/contact')
var about = require('./routes/about')

// init app
const app = express()

// app settings
app.set('view engine','ejs')
app.use(express.static('public'))



// routes
app.use('/',index)
app.use('/contact',contact)
app.use('/about',about)





app.listen(3000,()=>{
  console.log('listening on port 3000')
})