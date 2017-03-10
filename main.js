/**
 * This is the main logic for the sobject-doc-node app. This will export a
 * function named "run" that will do the actual processing.
 */

// Imports
// =============================================================================

/**
 * Stream reader with the capability to transform inputs.
 * @type {stream.Transform}
 */
var Transform = require('stream').Transform;

/**
 * XML transformer to convert XML to JSON.
 * @type {[type]}
 */
var xmlToObj = require('xml2js').parseString;

/**
 * Node filesystem manager.
 * @type {fs}
 */
var fs = require('fs');

/**
 * Recursive file directory creation
 * @type {mkdirp}
 */
var mkdirp = require('mkdirp');

/**
 * Configuration options read in from the config.json file.
 * @type {Object}
 */
var config = require(getFilePath('/util/config'));


// Private member variables
// =============================================================================

/**
 * Construct a new string transformer.
 * @type {Transform}
 */
var parser = new Transform();

/**
 * The list of SObjects that are being documented.
 * @type {Array}
 */
var sObjects;

/**
 * Conversion map from standard object API names to standard object labels.
 * @type {Object}
 */
var standardObjectLabels = {
  'OpportunityLineItem': 'Opportunity Product',
  'Pricebook2': 'Pricebook',
  'Product2': 'Product'
};


// Private methods
// =============================================================================

/**
 * Process process all object data into JSON documentation.
 * @method run
 */
var run = function(callback) {

  // Initialize our object list
  sObjects = [];

  var dir = config.data.source;
  console.log('Creating docs for objects in ' + dir);

  fs.readdir(dir, function(err, files) {

    if(err) throw err;
    var c = 0;

    var currentFile;

    files.forEach(function(file) {

      console.log('Processing: ' + file);

      if(file.indexOf('.object') != -1) {
        c++;

        currentFile = file.replace('.object', '');

        processData(fs.readFileSync(dir + file), file);
      }
    });
    var jsonData = JSON.stringify(sObjects);
    mkdirp.sync(config.data.target);
    fs.writeFile(config.data.target + 'sObjects.json', jsonData, function(err) {
      if(err) {
        console.log(err);
      }
      else {
        console.log('New object data saved as json.');
        if(typeof callback === 'function') {
          callback();
        }
      }
    });
  });
};

/**
 * Process the data from a single object file. This will push the result into
 * the sObjects array.
 * @method processData
 * @param  {Buffer} data The file data buffer from the input stream.
 * @param  {String} file The name of the file.
 */
var processData = function(data, file) {

  // Turn the data stream into a string
  var dataString = data.toString();

  // Create an XML parser
  xmlToObj(dataString, function(err, result) {

    if(typeof result.CustomObject.customSettingsVisibility !== 'undefined' &&
      result.CustomObject.customSettingsVisibility[0] === 'Protected') {
      return;
    }

    var objectData = parseSObjectFields(result, file);

    if(objectData.fields.length > 0) {
      sObjects.push(objectData);
    }
  });
};

/**
 * Parse the fields from an sObject data file.
 * @method parseSObjectFields
 * @param  {Object} data The object data converted from XML.
 * @param  {String} file The filename of the file being processed.
 * @return {Object} The sObject data object.
 */
var parseSObjectFields = function(data, file) {
  var sObject = {};

  // Get the name from the file
  sObject.Name = file.replace('.object', '');

  if(sObject.Name.indexOf('__c') !== -1) {
    sObject.Name = sObject.Name;
  }

  // Set the label
  sObject.Label = ((data.CustomObject.label && data.CustomObject.label[0]) || standardObjectLabels[sObject.Name]);
  if(!sObject.Label) {
    sObject.Label = sObject.Name
      // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
      // uppercase the first character
      .replace(/^./, function(str) {
        return str.toUpperCase();
      });
  }

  // Set the description
  sObject.Description = ((data.CustomObject.description && data.CustomObject.description[0]) || '');

  // Get the field data
  sObject.fields = [];

  for(var index in data.CustomObject.fields) {

    var field = data.CustomObject.fields[index];

    if(typeof field === 'object') {

      // Only operate on custom fields
      if(field.fullName[0].indexOf('__c') !== -1) {
        var fieldData = {};
        fieldData.Name = field.fullName[0];
        try {
          fieldData.Label = field.label[0];
        }
        catch(e) {}
        try {
          fieldData.Description = field.description[0];
        }
        catch(e) {}
        try {
          fieldData.Type = field.type[0];
        }
        catch(e) {}
        if(fieldData.Type === 'Lookup') {
          fieldData.Type = fieldData.Type + ' (' + field.referenceTo[0] + ')';
        }
        sObject.fields.push(fieldData);
      }
    }
  }

  return sObject;
};

// Export the run function
module.exports = run;
