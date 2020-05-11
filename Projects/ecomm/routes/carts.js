const express = require('express');
const cartsRepo = require('../repositories/carts');

const router = express.Router();

// recive a post req to add an item to a cart+
router.post('/cart/products', async (req, res) => {
	// does cart exist
	let cart;
	if (!req.session.cartId) {
		cart = await cartsRepo.create({ items: [] });
		req.session.cartId = cart.Id;
	} else {
		cart = await cartsRepo.getOne(req.session.cartId);
	}

	console.log(cart);

	const existingItem = cart.items.find((item) => item.id === req.body.productId);

	if (existingItem) {
		existingItem.quantity++;
	} else {
		// add new product id to items array
		cart.items.push({ id: req.body.productId, quantity: 1 });
	}

	await cartsRepo.update(cart.id, {
		items: cart.items
	});

	res.send('product added');
});

// recive a get req to show all items in cart

// recive a post request to delte an item from a cart

module.exports = router;
