const router = require('express').Router();

router.use('/client', require('./api/client'));
router.use('/trip', require('./api/trip')); 
router.use('/hotel', require('./api/hotel')); 


module.exports = router; 
