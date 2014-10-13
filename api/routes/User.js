/*jshint node:true */
'use strict';

module.exports = function (newRouter, userController) {

    newRouter
        .route('/user/:id')
        .get(userController.getPage);

    return newRouter;
};