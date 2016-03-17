var mongoose = require('mongoose');
var _ = require('underscore');

module.exports = function(wagner) {
    mongoose.connect('mongodb://admin:pass@ds011389.mlab.com:11389/mongotutdb');

    var Category = mongoose.model('Category', require('./category'), 'categories');

    var Product = mongoose.model('Product', require('./product'), 'products');

    var models = {
        Category: Category,
        Product: Product
    };

    // To ensure DRY, register factories in a loop
    _.each(models, function(value, key) {
        wagner.factory('key', function() {
            return Category;
        });
    });
}
