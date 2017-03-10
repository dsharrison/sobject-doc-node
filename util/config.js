/**
 * Configure the options for the application. This will default data from the
 * config.json file and also take in command-line arguments from the "config"
 * argument.
 */

// Imports
// ============================================================================

/**
 * Include polyfills for ES6 functionality.
 */
require(getFilePath('/util/polyfill'));

/**
 * Include the node filesystem.
 * @type {fs}
 */
var fs = require('fs');


// Private methods
// =============================================================================

/**
 * Initialize the configuration from the config file and any command line
 * arguments.
 * @method initConfig
 * @return {[type]} [description]
 */
function initConfig() {

  // Read the config from the .json file
  var file_data = fs.readFileSync(getFilePath('/config.json'));
  data = JSON.parse(file_data.toString());

  process.argv.forEach(function(val, index, array) {
    if(typeof val === 'string' && val.startsWith('config=')) {
      var configParam = val.substring(7, val.length);
      addData(configParam);
    }
  });
}

var addData = function(configParam) {
  var configAdd = configParam;
  try {
    if(typeof configAdd !== 'object') {
      configAdd = JSON.parse(configAdd);
    }
  }
  catch(e) {
    throw('Invalid argument: Expected the third argument to be configuration data passed as JSON. Got: ' + configParam);
  }
  Object.keys(configAdd).forEach(function(key) {
    data[key] = configAdd[key];
  });
}
module.exports.addData = addData;

var data;
if(!data) {
  initConfig();
}
module.exports.data = data;
