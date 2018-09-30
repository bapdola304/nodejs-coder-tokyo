var low = require('lowdb');
var  FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('prodb.json');
var prodb = low(adapter);



prodb.defaults({ products: []})
  .write();

  module.exports = prodb;