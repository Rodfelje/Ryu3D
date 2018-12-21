const express = require('express');
const router = express.Router();

const Product = require('./models/Product');

router.get('/', async (req, res) => {
	const products = await Product.find();
	res.json(products);
});

router.post('/', async (req, res) => {
	console.log(req);
	const product = new Product(req.body);
	await product.save();
	console.log(product);
	res.json({
		status: 'Product saved',
		data: product
	});
});


module.exports = router;
