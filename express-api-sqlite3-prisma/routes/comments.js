const express = require('express');
const router = express.Router();
const { all, comment, add, edit, remove } = require('../controllers/comments');

router.get('/', all);
router.get('/:id', comment);
router.post('/add', add);
router.put('/edit/:id', edit);
router.delete('/remove/:id', remove);

module.exports = router;