module.exports = function (app) {
  const categoryController = require('../controllers/category');
  const partyController = require('../controllers/party');

  app.route('/connection').get((req, res) => {
    res.status(200).send();
  });

  app.route('/parties')
    .get(partyController.getParties)
    .post(partyController.updateParties);

  app.route('/party/:partyId')
    .delete(partyController.deleteParty)
    .post(partyController.updateParty);

  app.route('/party')
    .put(partyController.createParty);

  app.route('/categories')
    .get(categoryController.getCategories)
    .post(categoryController.updateCategories);

  app.route('/category/:categoryId')
    .delete(categoryController.deleteCategory)
    .post(categoryController.updateCategory);

  app.route('/category')
    .put(categoryController.createCategory);
};
