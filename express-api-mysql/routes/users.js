const express = require('express');
const router = express.Router();
const { all, user, add, edit, remove } = require('../controllers/users');

router.get('/', all);
router.get('/:id', user);
router.post('/add', add);
router.put('/edit/:id', edit);
router.delete('/remove/:id', remove);

module.exports = router;