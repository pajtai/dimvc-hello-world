/*jshint node:true */
'use strict';

var _ = require('lodash');

module.exports = function (UserModel, userView, temperatureService) {

    return {
        getPage : getPage.bind(null, UserModel, userView, temperatureService)
        // , getApi : ...
    };

};


function getPage(UserModel, userView, temperatureService) {
    console.log('loading getPage');
    return function(req, res, next) {
        console.log('getting user model');
        UserModel
            .findQ({
                _id : res.id
            })
            .then(function(user) {
                res.render(userView, {
                    model : _.extend(user, {
                        temperature : temperatureService()
                    })
                });
            })
            .catch(next);
    };

}