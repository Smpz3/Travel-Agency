const router = require('express').Router(); 
const { getAll, getById, create, deleteClientById, update } = require('../../models/client.model'); 

// get all clients 
router.get('/', async (req, res) => {
    try {
    const [result] = await getAll()
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

//get one client info by id
router.get('/:id', async (req, res) => {
    try {
        
    let id = Number(req.params.id);
        const [result] = await getById(id);
        res.json(result);
    } catch (error) {
        res.json({fatal:error.message})

    }
}); 
// sending new info to client 
router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body)
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});
//deleting client by id
router.delete('/:id', async (req, res) => {
    try {
        const [result] = await deleteClientById(Number(req.params.id)); 
        res.json(result)
    } catch (error){
        res.json({ 'fatal': error.message });
   }
});
//update 
router.put('/update/:id', async (req, res) => {
    try {
        const [result] = await update(Number(req.params.id), req.body);
        const [result_final] = await getById(Number(req.params.id));
        res.json(result_final)
    } catch (error) {
        res.json({ fatal: error.message });
    }
});


module.exports = router;  