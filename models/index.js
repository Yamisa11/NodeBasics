const dbConfig = require('../DB/db.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.posts = require('./posts.models.js')(mongoose)

module.exports = db;