const Repository = require('./repository');

class ProductsRepoistory extends Repository {}

module.exports = new ProductsRepoistory('products.json');
