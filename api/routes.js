/*jshint node:true */
'use strict';

module.exports = function (userController) {
    return {
        '/user/:id?' : {
            controller : userController,
            plural : '/users/?'
            // middleware : [...],
            // getMiddleware : [...]
        }
    };
};