const router = require('express').Router(); 

// get all clients 
router.get('/', async (req, res) => {
    try {
    const [result] = await db.query('SELECT * from TravelAgency.client ');
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

//get one client info 
router.get('/:id', async (req, res) => {
    try {
        
    let id = Number(req.params.id);
    const [result] = await db.query(`SELECT * FROM TravelAgency.client WHERE client.id=${id}`)
        res.json(result);
    } catch (error) {
        res.json({fatal:error.message})

    }
}); 
// 



module.exports = router;  