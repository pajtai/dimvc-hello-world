/*jshint node:true */
'use strict';

var _ = require('lodash');

module.exports = function (UserModel, userView, response, next, temperatureService) {
    return {
        getPage : getPage.bind(null, UserModel, userView, response, next, temperatureService)
        // , getApi : ...
    };
};

function getPage(UserModel, userView, response, next, temperatureService) {
    UserModel
        .findQ({
            _id : response.id
        })
        .then(function(user) {
            response.render(userView, {
                model : _.extend(user, {
                    temperature : temperatureService()
                })
            });
        })
        .catch(next);
}