const router = require('express').Router();

// get all 
router.get('/', (req, res) => {
    res.end('obtener todos los trip')
})

module.exports = router; 