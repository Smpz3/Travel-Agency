const router = require('express').Router();

// get all 
router.get('/', (req, res) => {
try{
    res.end('obtener todos los trip'); 
} catch (error) {
    res.json({ fatal: error.message })

}
}); 

router.get('/:id', async (req, res) => {
    try{
    let id = Number(req.params.id);
    const [result] = await db.query(`SELECT * FROM TravelAgency.trip WHERE trip.id=${id}`)
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

module.exports = router; 