// require('dotenv').config();

const config = require('../knexfile')
const knex = require('knex')(config[production]);

const initialConnection = knex('freefitlounge')
  .then(() => {
    console.log('successful connection to database')
  })
  .catch(() => {
    console.log('error connection to database')
  });

module.exports = {
  initialConnection
}