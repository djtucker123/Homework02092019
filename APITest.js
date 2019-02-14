const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const db = require('./models');
const expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

let request;


describe('GET Store inventory API Method (7 tests MYSQL)', function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    // console.log(server);
    //request = chai.request(server);
    request = chai.request("http://localhost:8150");
    return db.sequelize.sync({ force: true });
    
  });
  
  it('should find all DB stock items', function(done) {
    // Add some examples to the db to test with
    db.products.bulkCreate([
        {item_id: 2, product_name: 'Orange', department_name: 'Produce', price: 2.00, stock_quantity: 14},
        {item_id: 3, product_name: 'Lettuce', department_name: 'Produce', price: 2.15, stock_quantity: 24},
        {item_id: 4, product_name: 'Beef', department_name: 'Meat', price: 5.22, stock_quantity: 34},
        {item_id: 5, product_name: 'Chicken', department_name: 'Meat', price: 4.30, stock_quantity: 10}

    ]).then(function() {
      // Request the route that returns all examples
      request.get('/api/stock').end(function(err, res) {
        console.log("its getting here");
        console.log(err);
        let responseStatus = res.status;
        let responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('array')
          .that.has.lengthOf(4);

        expect(responseBody[0])
          .to.be.an('object')
          .that.includes({item_id: 2, product_name: 'Orange', department_name: 'Produce', price: 2.00, stock_quantity: 14});

        expect(responseBody[1])
          .to.be.an('object')
          .that.includes({item_id: 3, product_name: 'Lettuce', department_name: 'Produce', price: 2.15, stock_quantity: 24});

        expect(responseBody[2])
        .to.be.an('object')
        .that.includes({item_id: 4, product_name: 'Beef', department_name: 'Meat', price: 5.22, stock_quantity: 34});

        expect(responseBody[3])
        .to.be.an('object')
        .that.includes({item_id: 5, product_name: 'Chicken', department_name: 'Meat', price: 4.30, stock_quantity: 10});

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});

// describe('POST /api/user', function() {
//   beforeEach(function() {
//     request = chai.request(server);
//     return db.sequelize.sync({ force: true });
//   });

//   it('should save an example', function(done) {
//     var reqBody = {
//       username: 'John-Smith',
//       password: 'stealthy'
//     };

//     // POST the request body to the server
//     request
//       .post('/api/user')
//       .send(reqBody)
//       .end(function(err, res) {
//         var responseStatus = res.status;
//         var responseBody = res.body;

//         // Run assertions on the response

//         expect(err).to.be.null;

//         expect(responseStatus).to.equal(200);

//         expect(responseBody)
//           .to.be.an('object')
//           .that.includes(reqBody);

//         // The `done` function is used to end any asynchronous tests
//         done();
//       });
//   });
// });


