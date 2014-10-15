/*jshint node:true */
'use strict';

module.exports = function (userController) {
    return {
        // TODO: add middleare stack
        // TODO: add ability to post object
        '/user/:id?' : ['get', userController.showUser],
        '/users' : ['get', userController.showUsers]
    };
};