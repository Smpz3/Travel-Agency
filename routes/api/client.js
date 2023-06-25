const router = require('express').Router(); 

// get all clients 
router.get('/', async (req, res) => {
    const petition = await db.query('SELECT * from client '); 
    console.log(petition); 
    res.end('petition complete')
})

module.exports = router; 