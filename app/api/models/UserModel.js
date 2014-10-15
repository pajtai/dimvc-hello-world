/*jshint node:true */
'use strict';

var sillyname = require('sillyname');

module.exports = function(mongoose) {

    var Schema = mongoose.Schema,
        schema = new Schema({
            name: {type: String, trim: true, default : sillyname }
        });

    return mongoose.model('users', schema);
};
