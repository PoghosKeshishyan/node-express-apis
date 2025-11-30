const express = require('express');
const router = express.Router();
const { all, car, add, edit, remove } = require('../controllers/cars');

router.get('/', all);
router.get('/:id', car);
router.post('/add', add);
router.put('/edit/:id', edit);
router.delete('/remove/:id', remove);

module.exports = router;