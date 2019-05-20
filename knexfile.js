require('dotenv').config();
const knex = require('knex');

const options = {
  production: {
    client: 'pq',
    version: '10.6',
    connection: {
      host: "localhost",
      user: "mikejanes",
      password: "",
      database: "freefitlounge",
    },
    pool: { min: 1, max: 7 },
  },
  // development: {
  //   client: 'pq',
  //   version: '10.6',
  //   connection: {
  //     host: "localhost",
  //     user: "mikejanes",`
  //     password: "",
  //     database: "freefitlounge",
  //   },
  //   pool: { min: 1, max: 7 },
  // },
};

module.exports = options;