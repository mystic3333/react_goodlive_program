const express = require('express')
const router = express.Router()
const config = require('../../../config')
const homeHotData = require('../../../data/home/hotdata')

router.get(config.api.homehot1, (req, res) => {
    result = homeHotData.hot1
    res.json({
        data: result
    })
})

router.get(config.api.homehot2, (req, res) => {
    res.json({
        data: homeHotData.hot2
    })
})

module.exports = router