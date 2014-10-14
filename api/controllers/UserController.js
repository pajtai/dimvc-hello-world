/*jshint node:true */
'use strict';

var _ = require('lodash'),
    sillyname = require('sillyname');

module.exports = function (UserModel, userView, usersView, temperatureService, log) {

    return {
        showUser : showUser,
        showUsers : showUsers
    };

    function showUser() {
        return function(req, res, next) {
            UserModel
                .findOneQ({
                    _id : '' + req.param('id')
                })
                .then(function(user) {
                    if (!user) {
                        log.warn('oh no. we cannot find the user!');
                        throw new Error('No user found');
                    }

                    res.render(userView, {
                        model : _.extend(user, {
                            temperature : temperatureService()
                        })
                    });
                })
                .catch(next.bind(next, undefined));
        };

    }

    function post() {
        return function(req, res, next) {
            req.name = req.name || sillyname();
            console.log(req.name);
            new UserModel({
                name : req.name
            })
                .saveQ()
                .then(function(user) {
                    console.log('done', user);
                    res.status(200).send(user);
                })
                .catch(function(error) {
                    console.log('error', error);
                    res.status(500).send(error);
                });

        };
    }

    function showUsers() {
        return function(req, res, next) {
            UserModel
                .find()
                .lean()
                .execQ()
                .then(function(users) {
                    res.render(usersView, {
                        model : {
                            users : users
                        }
                    });
                })
                .catch(function(error) {
                    res.status(500).send(error);
                });
        };
    }
};


