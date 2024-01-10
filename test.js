const request = require('supertest');
const app = require('./app');
const chai =  import('chai');
const expect = chai.expect;


describe('POST /data', function() {
  it('responds with status 200', function(done) {
    request(app)
      .post('/data')
      
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});


        
