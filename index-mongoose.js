var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/example');

// Parameters are: model name, schema, collection name
var User = mongoose.model('User', schema, 'users');

var user = new User({
	name: 'John Doe',
	email: 'jdoe@mail.com'
});

user.save(function(error) {
	if (error) {
		console.log(error);
		process.exit(1);
	}
	User.find({email: 'jdoe@mail.com'}, function(error, docs) {
		if (error) {
			console.log(error);
			process.exit(1);
		}
		console.log(require('util').inspect(docs));
		console.log('---------------------------');
		console.log(docs);
		process.exit(0);
	});
});