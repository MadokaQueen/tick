const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  date: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  prices: {
    type: [Number],
    required: true
  },
  seats: {
    type: [String],
    required: true
  },
  tickets: {
    type: [Number],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  seatmap: {
    type: [String],
    required: true
  },
  additional: {
    type: [String]
  }
});
ItemSchema.index({
  place: "text",
  city: "text",
  name: "text",
  description: "text"
});

module.exports = Item = mongoose.model("item", ItemSchema);
