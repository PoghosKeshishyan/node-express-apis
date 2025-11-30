const express = require('express');
const router = express.Router();
const { all, product, add, edit, remove } = require('../controllers/products');

router.get('/', all);
router.get('/:id', product);
router.post('/add', add);
router.put('/edit/:id', edit);
router.delete('/remove/:id', remove);

module.exports = router;