/**
 * The main module for the sobject-doc-node app. This will export an object
 * with the configuration data and the run function to start processing.
 */

// Imports
// =============================================================================

/**
 * Include the file path.
 * @type {path}
 */
var path = require('path');


// Global variables
// =============================================================================

/**
 * The global appRoot to the current directory.
 * @type {String}
 */
global.appRoot = path.resolve(__dirname);

/**
 * Add a function to convert a local file path into an absolute path for node.
 * @method getFilePath
 * @param  {String} localPath The local path.
 * @return {String} The absolute path.
 */
global.getFilePath = function(localPath) {
  return appRoot + localPath;
};


// Public variables
// =============================================================================

/**
 * Export an object with the config object and the run function.
 * @type {Object}
 */
module.exports = {
  config: require(getFilePath('/util/config')),
  run: require(getFilePath('/main'))
};
