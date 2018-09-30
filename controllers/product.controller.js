
var db = require('../db.js');
var product = require('../models/product.model');
module.exports.index = function(req, res) {
// var page = req.query.page || 1;
// var item = 8;
// var sotrang = db.get('products').size();
// var start = (page - 1) *item;
// var end = page*item;
// // res.render('products/index',{products : db.get('products').value().slice(start,end)});
// res.render('products/index',
// 	{
// 		products : db.get('products').drop(start).take(item).value(),
// 		page : page
// 	});
product.find().then(function(product) {
    res.render('products/index', {
        products: product
    });
});
}
module.exports.create = function(req, res) {
res.render('./products/createProduct');
}

module.exports.postCreate = function(req, res) {
// var obj = {
// 	tensp : req.body.tensp,
// 	gia : req.body.gia
// }
db.get('products').push(req.body).write();
res.redirect('/products');
}