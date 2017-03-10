var expect = require('chai').expect;
var app = require('../sobject-doc-node');
var fs = require('fs');
var mock = require('mock-fs');

describe('The app with', function() {

  describe('standard objects', function() {

    var app;

    before(function(){

      // Load the app
      app = require('../sobject-doc-node');

      // setup mock files
      mock({
        'test/data/': {
          'Account.object': require('./mocks/Account'),
          'Product2.object': require('./mocks/Product2')
        },
        'config.json': JSON.stringify({
          source: 'test/data/',
          target: 'docs/'
        })
      });
    });

    after(function(){

      // remove mock files
      mock.restore();
    });

    it('should convert Account object to JSON', function(done) {

      // Run the app
      app.run(function(err){
        if(err) {
          done(err);
        }
        else {

          // Get our output
          var fileData = fs.readFileSync('docs/sObjects.json');
          data = JSON.parse(fileData.toString());
          expect(data).to.be.an.array;
          var productData = data[0];
          expect(productData).to.be.an.object;
          expect(productData.Name).to.equal('Account');
          expect(productData.Label).to.equal('Account');

          done();
        }
      });
    });

    it('should convert Product2 object to JSON', function(done) {

      // Run the app
      app.run(function(err){
        if(err) {
          done(err);
        }
        else {

          // Get our output
          var fileData = fs.readFileSync('docs/sObjects.json');
          data = JSON.parse(fileData.toString());
          expect(data).to.be.an.array;
          var productData = data[1];
          expect(productData).to.be.an.object;
          expect(productData.Name).to.equal('Product2');
          expect(productData.Label).to.equal('Product');

          done();
        }
      });
    });

  });

  describe('custom objects', function() {

    var app;

    before(function(){

      // Load the app
      app = require('../sobject-doc-node');

      // setup mock files
      mock({
        'test/data/': {
          'Beer_Emporium__c.object': require('./mocks/Beer_Emporium__c')
        },
        'config.json': JSON.stringify({
          source: 'test/data/',
          target: 'docs/'
        })
      });
    });

    after(function(){

      // remove mock files
      mock.restore();
    });

    it('should convert Beer Emporium object to JSON', function(done) {

      // Run the app
      app.run(function(err){
        if(err) {
          done(err);
        }
        else {

          // Get our output
          var fileData = fs.readFileSync('docs/sObjects.json');
          data = JSON.parse(fileData.toString());
          expect(data).to.be.an.array;
          var productData = data[0];
          expect(productData).to.be.an.object;
          expect(productData.Name).to.equal('Beer_Emporium__c');
          expect(productData.Label).to.equal('Beer Emporium');

          done();
        }
      });
    });

  });
});
