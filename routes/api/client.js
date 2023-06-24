const router = require('express').Router(); 

// get all clients 
router.get('/', (req, res) => {
    res.end('obtener todos los client')
})

module.exports = router; 