// Supports form-data binary file upload body

// If you want the files to save locally
// // Set up storage for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/'); // ensure this folder exists
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });
// Set up Multer to use memory storage
// const multer = require("multer");
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// Endpoint for file upload
const formDataControllerIndex =  (req, res) => {
    // Extract username from the request body
    const username = req.body.username;

    // Check if file is provided
    if (!req.file) {
        return res.status(400).send({ message: 'Please upload a file.' });
    }

    // Check if username is provided
    if (!username) {
        return res.status(400).send({ message: 'Username is required.' });
    }

    // Respond with file name and username
    res.json({
        username: username,
        fileName: req.file.originalname
    });
};

module.exports = { formDataControllerIndex }