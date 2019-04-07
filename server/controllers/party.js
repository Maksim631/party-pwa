"use strict";

const Party = require('../models/party');

let parties = [];

exports.getParties = function (req, res) {
    res.json(parties);
}

exports.deleteParty = function (req, res) {
    parties = parties.splice(req.params.partyId, 1);
    res.status(200).send();
}

exports.updateParty = function (req, res) {
    parties[req.params.partyId] = new Party(req.body);
    res.status(200).send();
}

exports.createParty = function (req, res) {
    parties.push(new Party(req.body));
    res.status(200).send();
}