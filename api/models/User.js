/*jshint node:true */
'use strict';

var mongoose = require('mongoose-q')(require('mongoose')),
    Schema = mongoose.Schema,
    schema = new Schema({
        name: {type: String, trim: true}
    });

module.exports = mongoose.model('users', schema);
