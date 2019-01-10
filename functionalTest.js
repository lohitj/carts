let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

let url = "http://orders";


describe("Testing Orders API", () => {  // <= Pass in done callback

    it("GET / should give 200 response", (done) => {
        chai.request(url)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();                               // <= Call done to signal callback end
            });
    }).timeout(5000)

    it('GET / should return JSON data', (done) => {   // <= No done callback
        chai.request(url)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.header('content-type', 'application/hal+json;charset=UTF-8');
                //expect(res).to.have.status(403);
                done();
            });
    }).timeout(5000);

})
