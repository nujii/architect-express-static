
module.exports = function startup(options, imports, register) {
  var express = require('express');

  var mountPath = options.mount || options.path;

  if (browsable) {
    imports.express.use(mountPath, express.directory(options.path));
  }
  else {
    imports.express.use(mountPath, express.static(options.path));
  }

  imports.logger.debug('Static path registered at '+path+
                       ' and mounted at '+mountPath);
};
