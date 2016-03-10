var mongoose = require('mongoose');
var productSchema = require('./user');

var u = new User({
    profile: {
        username: 'msa05'
    }
});

modifyUserProfile(u, {
    picture: 'http://www.nitchbiz.com/wp-content/uploads/2014/11/The-New-Marketing-Landscape.jpg'
});

// modifyUserData can only modifyUserData
// user.profile, not user.data
function modifyUserProfile(user, profile, callback) {
    user.profile = profile;
    user.save(function(error, user) {
        // handle result
    });
}
