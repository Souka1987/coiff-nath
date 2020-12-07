/*
 *
 * Database de produit
 ******************************/

const mongoose = require('mongoose'),
    Schema = mongoose.Schema

//Schema
const ProductSchema = new mongoose.Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    content: String,
    price: Number,
    date: String,
    image: String,
    admin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createDate: String

})

// Pour récupérer les data de la base de données.
const Product = mongoose.model('Product', ProductSchema)
// Exporter le model
module.exports = Product