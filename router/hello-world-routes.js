const express = require('express');
const HelloWorld = require('../controllers/hello-world');
const auth = require('../middlewares/authentication');

const router = express.Router();

router.get('/hello-world', auth, HelloWorld.helloWorld);

module.exports = router;
