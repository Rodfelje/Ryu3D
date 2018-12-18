const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product = new Schema({
	name: String,
	author: String,
});

module.exports = mongoose.model('Product', Product);
