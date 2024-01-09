const express = require('express');
const router = express.Router();
const dataController = require('../controller/dataController');

// Define routes
router.get('/', dataController.getAllData);
router.post('/add', dataController.addData);

module.exports = router;
