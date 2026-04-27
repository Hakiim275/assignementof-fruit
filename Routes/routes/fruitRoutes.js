const express = require('express');
const router = express.Router();
const fruitController = require('../controllers/fruitController');

router.post('/add', fruitController.create);
router.get('/all', fruitController.fetchfruits);
router.put('/update/:id', fruitController.update);
router.delete('/delete/:id', fruitController.delete);

module.exports = router;