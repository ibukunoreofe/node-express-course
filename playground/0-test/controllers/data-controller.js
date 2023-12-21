// Supports form-url-encode and json bodies
const dataControllerIndex = (req, res) => {
    res.status(200).json(req.body); // echo back the request body
}

module.exports = { dataControllerIndex }