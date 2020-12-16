/*
 * Controller Page Admin
 * ********************************** */


const Product = require('../../models/Product')


module.exports = {
    get: async (req, res) => {
        const dbProducts = await Product.find({})
        res.render('admin', {
            // Affiche des datas dans la page Admin
            products: dbProducts,
        })
    }
}