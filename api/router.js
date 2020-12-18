// Import 
const express = require('express'),
    router = express.Router()



// CONTROLLERS
const productsController = require('./controllers/productsController')


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