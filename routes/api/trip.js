const router = require('express').Router();
const { getAll, getById, create, deleteTripById, update, updateById } = require('../../models/trip.model');

// get all trips
router.get('/', async (req, res) => {
try{
    const [result] = await getAll();  
    res.json(result)
} catch (error) {
    res.json({ fatal: error.message })

}
}); 
//get one trip by id 
router.get('/:id', async (req,res) => {
    try {

        let id = Number(req.params.id);
        const [result] = await getById(id); 
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}); 

//post a new trip 
router.post('/', async (req,res) => {
    try {
        const [result] = await create(req.body);
        res.json(result)
    } catch (error) { 
        res.json({ fatal: error.message });
    }
});

//delete a trip
router.delete('/:id', async (req, res) => {
    try {
        const [result] = await deleteTripById(Number(req.params.id));
        res.json(result)
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});
//update a trip 
router.put('/update/:id', async (req, res) => {
    try {
        const [result] = await update(Number(req.params.id), req.body);
        const [result_final] = await getById(Number(req.params.id));
        res.json(result_final)
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});
//all incorporated petition 

router.put('/:tripId/client/:clientId', async (req, res) => {
    try {
        const { tripId, clientId } = req.params;
        const [result] = await updateById(Number(tripId), Number(clientId));
        res.json(result)
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
}); 


module.exports = router; 