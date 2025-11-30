const express = require('express');
const router = express.Router();
const { all, alien, add, edit, remove } = require('../controllers/aliens'); 

router.get('/', all);
router.get('/:id', alien);
router.post('/add', add);
router.put('/edit/:id', edit);
router.delete('/remove/:id', remove);

module.exports = router;