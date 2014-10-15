/*jshint node:true */
'use strict';

module.exports = function (constantsService) {
    return function() {
        return constantsService().hot;
    };
};