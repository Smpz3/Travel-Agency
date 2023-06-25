const router = require('express').Router(); 
const { getAll, getById, create } = require('../../models/client.model'); 

// get all clients 
router.get('/', async (req, res) => {
    try {
    const [result] = await getAll()
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

//get one client info 
router.get('/:id', async (req, res) => {
    try {
        
    let id = Number(req.params.id);
        const [result] = await getById(id);
        res.json(result);
    } catch (error) {
        res.json({fatal:error.message})

    }
}); 
// sending info to client 
router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body)
        res.json(result); 
  } catch (error) {
        res.json({ 'fatal': error.message })
    }  
})



module.exports = router;  