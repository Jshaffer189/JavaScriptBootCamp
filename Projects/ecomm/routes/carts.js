const express = require('express');

const router = express.Router();

// recive a post req to add an item to a cart+
router.post('/cart/products', (req, res) => {
	console.log(req.body.productId);

	res.send('product added');
});

// recive a get req to show all items in cart

// recive a post request to delte an item from a cart

module.exports = router;
