const express = require('express');
const { getData } = require('../controllers/dataController');

const router = express.Router();

router.get('/data/:id', getData);

module.exports = router;