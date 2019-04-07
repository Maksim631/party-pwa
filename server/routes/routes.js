module.exports = function(app) {
  const categoryController = require('../controllers/category');
  const partyController = require('../controllers/party');

  app.route('/parties')
    .get(partyController.getParties);

  app.route('/party/:partyId')
    .delete(partyController.deleteParty)
    .put(partyController.updateParty);

  app.route('/party')
    .post(partyController.createParty);

  app.route('/categories')
    .get(categoryController.getCategories);

  app.route('/category/:categoryId')
    .delete(categoryController.deleteCategory)
    .put(categoryController.updateCategory);

  app.route('/category')
    .post(categoryController.createCategory);
};
