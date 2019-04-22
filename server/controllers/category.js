"use strict";

const Category = require('../models/category');

let categories = [];
categories.push(new Category("Концерт"));
categories.push(new Category("Квартирник"));
categories.push(new Category("Клубная вечеринка"));

exports.getCategories = function (req, res) {
  console.log(categories);
  res.json(categories);
};

exports.deleteCategory = function (req, res) {
  categories = categories.splice(req.params.categoryId, 1);
  res.status(200).send();
};

exports.updateCategory = function (req, res) {
  categories[req.params.categoryId] = new Category(req.body);
  res.status(200).send();
};

exports.createCategory = function (req, res) {
  console.log(req.body);
  categories.push(new Category(req.body.title));
  res.status(200).send();
};

exports.updateCategories = function (req, res) {
  categories = req.body;
  res.status(200).send();
};
