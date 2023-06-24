const router = require('express').Router(); 

router.get('/', (req, res) => {
    res.end('obtener todos los hotel')
})


module.exports = router;  
