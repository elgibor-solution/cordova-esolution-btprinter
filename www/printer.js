var exec = require('cordova/exec');

var printer = {
  platforms: ['android'],

  isSupported: function() {
    if (window.device) {
      var platform = window.device.platform;
      if ((platform !== undefined) && (platform !== null)) {
        return (this.platforms.indexOf(platform.toLowerCase()) >= 0);
      }
    }
    return false;
  },

  listBluetoothDevices: function(onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'listBluetoothDevices', []);
  },
  connect: function(address, onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'connect', [address]);
  },
  disconnect: function(onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'disconnect', []);
  },
  feedPaper: function(lines, onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'feedPaper', [lines]);
  },
  printText: function(text, charset, onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'printText', [text, charset]);
  },
  printSelfTest: function (onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'printSelfTest', []);
  },
  getStatus: function (onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'getStatus', []);
  },
  getTemperature: function (onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'getTemperature', []);
  },
  setBarcode: function (align, small, scale, hri, height, onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'setBarcode', [align, small, scale, hri, height]);
  },
  printBarcode: function (type, data, onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'printBarcode', [type, data]);
  },
  printImage: function (image, width, height, align, onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'printImage', [image, width, height, align]);
  },
  drawPageRectangle: function (x, y, width, height, fillMode, onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'drawPageRectangle', [x, y, width, height, fillMode]);
  },
  drawPageFrame: function (x, y, width, height, fillMode, thickness, onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'drawPageFrame', [x, y, width, height, fillMode, thickness]);
  },
  selectPageMode: function (onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'selectPageMode', []);
  },
  selectStandardMode: function (onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'selectStandardMode', []);
  },
  setPageRegion: function (x, y, width, height, direction, onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'setPageRegion', [x, y, width, height, direction]);
  },
  printPage: function (onSuccess, onError) {
    exec(onSuccess, onError, 'BTPrinter', 'printPage', []);
  }
};
module.exports = printer;
