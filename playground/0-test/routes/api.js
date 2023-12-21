const express = require('express');
const {homeControllerIndex} = require("../controllers/home-controller");
const {dataControllerIndex} = require("../controllers/data-controller");
// const {formDataControllerIndex} = require("../controllers/form-data-controller");
const setUpformDataControllerInner = require("../controllers/form-data-controller-inner");
// const multer = require("multer");

const router = express.Router();

router.post('/data', dataControllerIndex);
router.get('/', homeControllerIndex);
setUpformDataControllerInner(router);

// Set up Multer to use memory storage
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// Endpoint for file upload
// router.post('/upload', upload.single('image'), formDataControllerIndex);

module.exports = router