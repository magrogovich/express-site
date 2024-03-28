var express = require('express')
var router = express.Router()

var date = new Date()

router.get('/',(req,res)=>{
    res.render('about',{date:date.getFullYear()})
})


module.exports = router