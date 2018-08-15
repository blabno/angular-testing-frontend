const os = require('os');

const filter = details => {
  const isIPv4 = 'IPv4' === details.family;
  const isInternal = false !== details.internal;
  return isIPv4 && !isInternal;
};

module.exports = () => {
  let address = 'localhost';
  const devices = os.networkInterfaces();
  Object.keys(devices).forEach(deviceName => {
    const details = devices[deviceName].find(filter);
    if (null != details) {
      address = details.address
    }
  });
  return address;
};
