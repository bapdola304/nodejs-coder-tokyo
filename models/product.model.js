var mongoose = require('mongoose');
 var productChema = new mongoose.Schema({
 	tensp : String,
 	anhsp : String,
 	tomtatsp : String
 });

 var Product = mongoose.model('Product', productChema,'Products');
 module.exports = Product;