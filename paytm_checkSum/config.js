const config = require('config');

const PaytmConfig = {
   mid: config.get('merchantID'),
   key: config.get('merchantKey'),
   website: config.get('paytmWebsite'),
   callBackURL: config.get('paytmCallbackUrl'),
};
module.exports.PaytmConfig = PaytmConfig;
