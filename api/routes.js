/*jshint node:true */
'use strict';

module.exports = function (userController) {
    return {
        '/user/:id?' : ['get', userController.showUser],
        '/users' : ['get', userController.showUsers]
    };
};