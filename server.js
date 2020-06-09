const dotenv = require('dotenv');
const strapi = require("strapi");

dotenv.config({
  path: '.env',
});

strapi().start();
