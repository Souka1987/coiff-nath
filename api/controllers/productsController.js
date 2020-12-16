/*
 * Controller Page Products
 * ********************************** */

const Product = require("../../models/Product")

module.exports = {
    get: async (req, res) => {
        await Product.find()
            .exec((err, data) => {
                res.json(data);
            });

    },
    post: async (req, res, next) => {
        const dbProduct = await Product.find({});

        console.log(req.body);
        Product.create({
            ...req.body,
        })
        res.json(dbProduct);
    },

    // put: async (req, res, next) => {
    //     const dbProduct = await Product.findById(req.params.id);

    //     Product.findOneAndUpdate({
    //             _id: req.params.id
    //         }, {
    //             title: req.body.name,
    //         },
    //         (err) => {
    //             if (err) res.send(err);
    //             else {
    //                 console.log("Modification OK");
    //                 res.json(dbProduct);
    //             }
    //         }
    //     );
    // },
    // deleteOne: async (req, res, next) => {
    //     const dbProduct = await Product.find({});
    //     Product.deleteOne({
    //             _id: req.params.id,
    //         },
    //         (err) => {
    //             if (!err) res.json(dbProduct);
    //             else res.send(err);
    //         }
    //     );
    // },
};