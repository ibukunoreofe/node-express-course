const {products} = require("../models/products");
const homeControllerIndex = (req, res) => {
    res.json(products)
}

module.exports = { homeControllerIndex }