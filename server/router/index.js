const express = require('express')
const router = express.Router()
const home = require('./routes/home')



router.use((req, res, next) => {
    console.log('router中间件执行')
    next()
})



router.use('/', home)

module.exports = router