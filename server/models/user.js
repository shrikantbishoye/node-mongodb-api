var mongoose = require('mongoose');

var User = mongoose.model('user', {
    username: {
        type: String,
        minlength: 1,
        trim: true,
        require: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    }
});

module.exports = {User};