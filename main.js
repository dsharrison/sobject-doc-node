var Transform = require('stream').Transform;
var xmlToObj = require('xml2js').parseString;
var parser = new Transform();
var fs = require('fs');
var mkdirp = require('mkdirp');
var config = require(getFilePath('/_util/config'));

var run = function() {

  var sObjects = [];
  var dir = config.data.source;
  console.log('Creating docs for objects in ' + dir);

  fs.readdir(dir, function(err, files) {

    if(err) throw err;
    var c = 0;

    var currentFile;

    files.forEach(function(file) {
      if(file.indexOf('.object') != -1) {
        c++;

        currentFile = file.replace('.cls', '');

        processData(fs.readFileSync(dir + file), file);

        console.dir(sObjects);
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
      }
    });
  });
}

function JSONToCSVConvertor(data, title, showLabel) {
  //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
  var arrData = typeof data != 'object' ? JSON.parse(data) : data;

  arrData = Object.keys(arrData).map(function(k) {
    return arrData[k]
  });

  console.log(arrData);

  var CSV = '';
  //Set Report title in first row or line

  CSV += title + '\r\n\n';

  //This condition will generate the Label/Header
  if(showLabel) {
    var row = '';

    //This loop will extract the label from 1st index of on array
    for(var index in arrData[0]) {

      //Now convert each value to string and comma-seprated
      row += index + ',';
    }

    row = row.slice(0, -1);

    //append Label row with line break
    CSV += row + '\r\n';
  }

  console.log(arrData.length);

  //1st loop is to extract each row
  for(var i = 0; i < arrData.length; i++) {
    var row = '';

    //2nd loop will extract each column and convert it in string comma-seprated
    for(var index in arrData[i]) {
      row += '"' + arrData[i][index] + '",';
    }

    row.slice(0, row.length - 1);

    //add a line break after each row
    CSV += row + '\r\n';
  }

  console.log(CSV);

  if(CSV == '') {
    return 'Invalid data';
  }

  return CSV;
}

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

    console.log('---- #data -----');
    console.dir(objectData);
    console.log('---- /data -----');

    if(objectData.fields.length > 0) {
      sObjects.push(objectData);
    }
  });
};

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
        .replace(/^./, function(str){ return str.toUpperCase(); })
  }

  // Set the description
  sObject.Description = ((data.CustomObject.description && data.CustomObject.description[0]) || '');

  // Get the field data
  sObject.fields = [];

  for(var index in data.CustomObject.fields) {

    var field = data.CustomObject.fields[index];

    console.log('---- #field -----');
    console.dir(field);
    console.log(typeof field)
    console.log('---- /field -----');

    if(typeof field === 'object') {

      console.log(field.fullName[0].indexOf('__c'));

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

  console.log('---- #sObject -----');
  console.dir(sObject);
  console.log('---- /sObject -----');

  return sObject;
}

var standardObjectLabels = {
  'OpportunityLineItem': 'Opportunity Product',
  'Pricebook2': 'Pricebook',
  'Product2': 'Product'
}

module.exports = run;
