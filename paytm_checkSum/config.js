const config = require('config');

const PaytmConfig = {
   mid: config.get('merchantID'),
   key: config.get('merchantKey'),
   website: config.get('paytmWebsite'),
};
module.exports.PaytmConfig = PaytmConfig;
