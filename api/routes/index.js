/*jshint node:true */
'use strict';

module.exports = function (newRoute, userRoute) {
    newRoute.use(userRoute);
    return newRoute;
};