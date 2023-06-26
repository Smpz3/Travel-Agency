const router = require('express').Router(); 
const { getAll, getById, create, deleteHotelById, update } = require('../../models/hotel.model');

router.get('/', async (req, res) => {
    try{
        const [result] = await getAll(); 
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });

    }
}); 
//get hotel by id 
router.get('/:id', async (req, res) => {
    try {
        let id = Number(req.params.id);
        const [result] = await getById(id); 
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message }); 

    }
}); 
//post a hotel 
router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
}); 
//delete a hotel
router.delete('/:id', async (req, res) => {
    try {
        const [result] = await deleteHotelById(Number(req.params.id));
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
}); 
//update a hotel 
router.put('/update/:id', async (req, res) => {
    try {
        const [result] = await update(Number(req.params.id), req.body);
        const [result_final] = await getById(Number(req.params.id));
        res.json(result_final);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
}); 



module.exports = router;  
