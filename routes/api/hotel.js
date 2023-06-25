const router = require('express').Router(); 

router.get('/', async (req, res) => {
    try{
    const [result] = await db.query('SELECT * FROM TravelAgency.hotel');
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message })

    }
}); 

router.get('/:id', async (req, res) => {
    try {
    let id = Number(req.params.id);
    const [result] = await db.query(`SELECT * FROM TravelAgency.hotel WHERE hotel.id=${id}`)
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message })

    }
})


module.exports = router;  
