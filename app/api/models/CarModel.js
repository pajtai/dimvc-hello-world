/*jshint node:true */
'use strict';


module.exports = function(mongoose, temperatureService) {

    var Schema = mongoose.Schema,
        schema = new Schema({
            date: {type: Date, default:Date.now},
            tires: {type: Number, default:4},
            engine: {type: String, default:temperatureService}
        });

    return mongoose.model('cars', schema);
};
