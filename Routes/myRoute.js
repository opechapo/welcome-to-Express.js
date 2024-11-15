const express= require('express');
const {dltPage, homePage} = require('../Controller/myController');
const route = express.Router();

route.get('/', homePage);

route.get("/dltAfrica/:id", dltPage)

module.exports = route
