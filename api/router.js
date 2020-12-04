// Import 
const express = require('express'),
    mongodb = require('mongodb'),
    router = express.Router()





// CONTROLLER
const homeController = require('./controllers/homeController')





/*
 * Home
 * ***** */

router.route('/')
    .get(homeController.get)


// Add post





// Delete post

















    // Exportation du routeur
    module.exports = router