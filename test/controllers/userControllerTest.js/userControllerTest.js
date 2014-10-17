/*jshint node:true */
'use strict';

var dimvc = require('dimvc'),
    chai = require('chai'),
    sinonChai = require('sinon-chai'),
    sinon = require('sinon'),
    q = require('q'),
    root = __dirname + '/../../../app';

chai.should();
chai.use(sinonChai);

// Example of unit test with mocks
describe('userController', function() {
    describe('showUser', function() {

        it('will findOne UserModel of _id req.id', function(done) {

            var req = new Request({ id : '007' }),
                findOneStub = sinon.stub().returns(q.defer().promise),
                MockUserModel = {
                    findOneQ : findOneStub
                };

            dimvc
                .test(root)
                // .test returns a dependable container, so we can mock out dependencies at resolve time:
                .resolve({
                    UserModel : MockUserModel
                }, function(userController) {
                    userController.showUser()(req, function() {}, function() {});
                    findOneStub.should.have.been.calledWith({
                        _id: '007'
                    });
                    done();
                });
        });
    });
});

function Request(options) {
    this.options = options;
}

Request.prototype.param = function(field) {
    return this.options[field];
};
