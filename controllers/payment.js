const PaytmChecksum = require('../paytm/PaytmChecksum');
const config = require('config');

exports.transaction = async (req, res) => {
   const paytmParams = {
      requestType: 'Payment',
      MID: config.get('merchantID'),
      WEBSITE: config.get('paytmWebsite'),
      ORDER_ID: req.order._id,
      TXN_AMOUNT: `${req.body.amount}`,
      CALLBACK_URL: 'http://localhost:8000/api/callback',
      currency: 'INR',
      custId: req.profile._id,
      mobile: req.body.mobile,
      email: req.body.email,
   };

   const promise = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams),
      config.get('merchantKey')
   ).catch((err) => console.log(err));

   const checkSum = Promise.resolve(promise);

   checkSum.then((item) => {
      const params = {
         ...paytmParams,
         CHECKSUMHASH: item,
      };

      return res.json(params);
   });
};

exports.callback = async (req, res) => {
   console.log(req.data);
};
