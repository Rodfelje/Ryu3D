const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product = new Schema({
	name: String,
	author: String,
	img: Buffer,
	likes: {type: Number, default: 0},
	downloads: {type: Number, default: 0}
});

module.exports = mongoose.model('Product', Product);
