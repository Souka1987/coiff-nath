/*
 * Controller Page Products
 * ********************************** */

/*
 * Article Controller
 *********************/
const Product = require("../../models/Product"),
    User = require("../../models/User")

module.exports = {
    get: async (req, res) => {
        await Product.find()
            .populate("author")
            .exec((err, data) => {
                res.json(data);
            });
    },
    post: async (req, res, next) => {
        const dbProduct = await Product.find({});
        const UserId = await User.findOne({
            pseudo: req.body.author
        });

        console.log(req.body);

        if (req.body.title && UserId._id) {
            Product.create({
                ...req.body,
                author: UserId._id,
            });

            // Boutton create article pour le tuto
        } else if (req.body.data.title) {
            const dbUser = await User.find()
            console.log(dbUser)
            if (dbUser.length <= 1) {
                console.log("pas d'user")
                const UserIdRandom = await User.findOne();
                await Product.create({
                    title: req.body.data.title,
                    author: UserIdRandom._id,
                });
            }
        }
        res.json(dbProduct);
    },
    put: async (req, res, next) => {
        const dbProduct = await Product.findById(req.params.id);

        Product.findOneAndUpdate({
                _id: req.params.id
            }, {
                title: req.body.title,
            },
            (err) => {
                if (err) res.send(err);
                else {
                    console.log("Modification OK");
                    res.json(dbProduct);
                }
            }
        );
    },
    deleteOne: async (req, res, next) => {
        const dbProduct = await ProductdbProduct.find({});
        Article.deleteOne({
                _id: req.params.id,
            },
            (err) => {
                if (!err) res.json(dbProduct);
                else res.send(err);
            }
        );
    },
};