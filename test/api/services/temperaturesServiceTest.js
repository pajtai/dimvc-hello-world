/*jshint node:true */
'use strict';

var dimvc = require('dimvc'),
    chai = require('chai'),
    sinonChai = require('sinon-chai'),
    root = __dirname + '/../../../app';

chai.should();
chai.use(sinonChai);
console.log(root);

// Example of simple unit test with all dependcies followed
describe('temperatureService', function() {
    it('will return the hot key', function(done) {

        dimvc
            .test(root)
            // temperatureService depends on constantsService to return, ¡muy caliente!
            .resolve(function(temperatureService) {
                temperatureService().should.equal('¡muy caliente!');
                done();
            });
    });
});
