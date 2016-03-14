var mongoose = require('mongoose');

module.exports = function(wagner) {
    mongoose.connect('mongodb://admin:pass@ds011389.mlab.com:11389/mongotutdb');
    
    var Category = mongoose.model('Category', require('./category'), 'categories');

    wagner.factory('Category', function() {
        return Category;
    });

    return {
        Category: Category
    }
}
