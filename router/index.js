const express = require('express');
const authRouter = require('./auth-routes');
const helloRouter = require('./hello-world-routes');

const router = express.Router();

router.use(authRouter);
router.use(helloRouter);

module.exports = router;
