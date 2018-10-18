const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");
// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: 1 })
    .then(items => res.json(items));
});

// @route   GET api/items/byId/
// @desc    Get Item By Id
// @access  Public
router.get("/byId/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   GET api/items/byAdress/
// @desc    Get Item By Adress
// @access  Public
router.get("/byAdress/:adress", (req, res) => {
  Item.find({ adress: req.params.adress })
    .then(item => {
      item.length > 0 ? res.json(item) : res.json(false);
    })
    .catch(err => res.status(404).json({ success: false }));
});

// @route   GET api/items/some/
// @desc    Get Some Items
// @access  Public
router.get("/some/:skip/:limit", (req, res) => {
  Item.find()
    .sort({ date: 1 })
    .skip(req.params.skip * 1)
    .limit(req.params.limit * 1)
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ success: false, err }));
});

// @route   GET api/items/some/
// @desc    Get Some Items By City
// @access  Public
router.get("/city/:city/:skip/:limit", (req, res) => {
  console.log(req.params);
  var f;
  switch (req.params.city) {
    case "all":
      f = {};
      break;
    case "moscow":
      f = { city: "Москва" };
      break;
    case "spb":
      f = { city: "Санкт-Петербург" };
      break;
    case "vrn":
      f = { city: "Воронеж" };
      break;
    default:
      f = {};
      break;
  }
  Item.find(f)
    .sort({ date: 1 })
    .skip(req.params.skip * 1)
    .limit(req.params.limit * 1)
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ success: false, err }));
});

// @route   GET api/items/search/
// @desc    Search By Desription
// @access  Public
router.get("/search", (req, res) => {
  Item.find(
    { $text: { $search: req.query.str } },
    { score: { $meta: "textScore" } }
  )
    .sort({ score: { $meta: "textScore" } })
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ success: false, err }));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    adress: req.body.adress,
    city: req.body.city,
    featured: req.body.featured,
    date: req.body.date,
    place: req.body.place,
    prices: req.body.prices,
    seats: req.body.seats,
    tickets: req.body.tickets,
    description: req.body.description,
    cover: req.body.cover,
    seatmap: req.body.seatmap,
    additional: req.body.additional
  });

  newItem
    .save()
    .then(item => res.json(item))
    .catch(err => res.json({ success: false, err }));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false, err }));
});

router.get("/featured/:city", (req, res) => {
  var f;
  switch (req.params.city) {
    case "all":
      f = {};
      break;
    case "moscow":
      f = { city: "Москва" };
      break;
    case "spb":
      f = { city: "Санкт-Петербург" };
      break;
    case "vrn":
      f = { city: "Воронеж" };
      break;
    default:
      f = {};
      break;
  }
  f.featured = true;
  Item.find(f)
    .sort({ date: -1 })
    .limit(5)
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ success: false, err }));
});

module.exports = router;
