/*jshint node:true */
'use strict';

module.exports = function(mongoose) {

    var Schema = mongoose.Schema,
        schema = new Schema({
            name: {type: String, trim: true}
        });

    return mongoose.model('users', schema);
};
