// Import 
const express = require('express'),
    router = express.Router()





const { isAdmin } = require('../middleware/auth')
// CONTROLLER
const productsController = require('./controllers/productsController')





/*
 * Page Nos produits
 * ****************** */

router.route('/products')
    .get(productsController.get)
    .post(isAdmin, productsController.post)


















// Exportation du routeur
module.exports = router