const express = require('express');
const shoesController = require('./../controller/shoesController');

const router = express.Router();
//rotas
router // /api/shoes/
    .route('/')
    .get(shoesController.getAllShoes)
    .post(shoesController.createShoe);

router // /api/shoes/:id
    .route('/:id')
    .get(shoesController.getShoe)
    .patch(shoesController.updateShoe)
    .delete(shoesController.deleteShoe);

module.exports = router; 