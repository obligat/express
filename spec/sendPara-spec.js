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

describe('POST /user', function () {
    it("should get a parameter by body", function (done) {
        request .post('/user')
            .send({name: "eng"})
            .expect('eng')
            .end(function (err, res) {
                if(err){
                    done.fail(err);
                }
                else {
                    done();
                }
            });
    })
});

describe('POST /user', function () {
    it("should get a parameter by param", function (done) {
        request .post('/user')
            .send({name: "wang"})
            .expect('wang')
            .end(function (err, res) {
                if(err){
                    done.fail(err);
                }
                else {
                    done();
                }
            });
    })
});

