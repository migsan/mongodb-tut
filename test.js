var assert = require('assert');

describe('my feature', function() {
	it('works', function() {
		assert.equal('A', 'A');
	});
	it('failsss', function() {
		assert.throws(function() {
			throw 'Error!';
		});
	});
});
