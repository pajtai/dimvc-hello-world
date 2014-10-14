/*jshint node:true */
'use strict';

module.exports = function (userController) {
    return {
        '/user/:id' : {
            // middleware : [...],
            get : userController.getPage
        }
    };
};