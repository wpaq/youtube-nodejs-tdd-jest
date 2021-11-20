const routes = require('express').Router();
const { User } = require('./app/models')

User.create({ name: 'Wallyson', email: 'wallyson@email.com', password_hash: '5585454545' });

module.exports = routes;
