var supertest = require('supertest');
var sendPara = require('../sendPara/sendPara');

var request = supertest(sendPara);

describe('GET /user', function () {
    it('should get a parameter by query', function (done) {
        request.get('/user?name=pika')
            .end(function (err, res) {
                expect(res.text).toEqual('pika');
                done(err);
            })
    })
});