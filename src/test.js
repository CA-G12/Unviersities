const supertest = require("supertest");
const app = require("./app");

describe("app test", () => {
  test('when endpoint equal "/inputSreach"', (done) => {
    supertest(app)
      .post("/inputSreach")
      .send({data:"American Samoa"})
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        console.log(JSON.parse(res.text)[0]);
        expect(JSON.parse(res.text)[0]).toBe("American Samoa");
        done();
      });
  });



  test('when endpoint equal "/searchData"', (done) => {
    supertest(app)
      .post("/searchData")
      .send({data:"India"})
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.status);
         expect(res.status).toBe(200);
        done();
      });
  });

});