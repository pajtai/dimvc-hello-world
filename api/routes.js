/*jshint node:true */
'use strict';

module.exports = function (UserController) {
    console.log('=-=-=-=-=-=-=');
    console.log(UserController.toString());
    return {
        '/user/:id' : {
            // middleware : [...],
            get : (new UserController()).getPage
        }
    }
};