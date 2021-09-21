//Imports
const router = require('express').Router()
const Item = require('./items-model'); //Object W/ Methods
const restrict = require('../middleware/restrict')


//Endpoints
//GetAll, GetById, GetByLocation(filter), Get/ownerID/all, POST, PUT, DELETE
//[GET] All Items
router.get('/', 
  restrict,
  (req, res, next) => {
    Item.getItems()
      .then(resource => {
        res.status(200).json(resource);
      })
      .catch(next);
});

//[GET] Item By ItemId
router.get("/:itemId", (req, res, next) => {
  const { itemId } = req.params;

  if (itemId) {
    Item.getByItemId(itemId)
      .then((specificItem) => {
        res.status(200).json(specificItem[0]);
      })
      .catch(next)
  } else {
    res.status(406).json({ message: "Item Id Required" });
  }
});

//[PUT] Item By ItemId
router.put("/:itemId", (req, res, next) => {
  const updatedItem = req.body;

  if (updatedItem.nickname && req.params.itemId) {
    Item.updatePlantByitemId(updatedItem)
      .then((update) => {
        res.status(200).json(update[0]);
      })
      .catch(next)
  } else {
    res.status(406).json({ message: "ItemId And Name Are Required" });
  }
});

//[POST]
router.post('/', 
  restrict,
  (req, res, next) => {
    Item.createItem(req.body)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(next);
});

//[DELETE] Plant By itemId
router.delete("/:itemId", (req, res, next) => {
  const { itemId } = req.params;

  Item.deletePlant(itemId)
    .then((resolution) => {
      res.status(200).json(resolution);
    })
    .catch(next)
});


//Exports; Exposing
module.exports = router;