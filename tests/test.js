var expect = require('chai').expect;
var request = require('request');
var server = require('../server/server.js');

describe("Squirrel Database Service API", function() {
  describe("API '/test'", function() {

    var url = 'http://localhost:8888/test'

    it("Responds with a 200", function(done) {
      request(url, function(error, res, body){
        expect(res.statusCode).to.equal(200);
        done();
      })
    });
  });
});