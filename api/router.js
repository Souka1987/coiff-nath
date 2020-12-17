// Import 
const express = require('express'),
    router = express.Router()



// CONTROLLERS
const productsController = require('./controllers/productsController')


/*
 * Page Nos produits
 * ****************** */

// router.route('/products')
//     .get(productsController.get)



/*
 * Admin
 * ****************** */

router.route('/products')
  .get(productsController.get)
  .post( productsController.post)

router.route('/products/:id')
  .put(productsController.put)
  .delete(productsController.deleteOne)

















// Exportation du routeur
module.exports = router