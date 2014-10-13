/*jshint node:true */
'use strict';

module.exports = function (UserController) {
    return {
        '/user/:id' : {
            // middleware : [...],
            get : (new UserController()).getPage
        }
    }
};