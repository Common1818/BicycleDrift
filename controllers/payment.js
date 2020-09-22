const Order = require("../models/Order");
const Product = require("../models/Bicycle");
const checksum_lib = require("../paytm_checkSum/checksum");
const config = require("../paytm_checkSum/config");
const https = require("https");
const qs = require("querystring");
// Nodemailer
const nodemailer = require("nodemailer");
var gmailEmail = "marketingacad.help@gmail.com";
var gmailPassword = "abcd9876";
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});
// ------

const sendEmail = (products, billingDetails, total, _id) => {
  console.log("nodemailer running");
  products.map((prod) => {
    console.log(prod);
    var tableToAppend = `
      <tr style="background=#fff; " >
    <th>${prod.name}</th>
    <th>	&#8377; ${prod.price}</th>
    <th>${prod.quantity}</th>
  </tr>
  `;
    table += tableToAppend;
  });
  const output = `
    <h2>Hey ${billingDetails.firstName} Your order was placed Successfully.. YAY!!! </h2>
    <h3>Order Id:${billingDetails._id}</h3>
    <table style="background=#f1f1f1;width=100vw;">
  <tr >
    <th>Product</th>
    <th>Price</th>
    <th>Quantity</th>
  </tr>
  ${table}
</table>
<h3>Total : 	&#8377;${total}</h3>
<h3>Your order will be dispatched within 3 working days. You'll be notified on your mobile numnber: ${billingDetails.mobileNumber} </h3>
<h3>Thanks For shopping on BicycleDrift</h3>
  `;
  console.log(output);
  let mailOptions = {
    from: '"Nodemailer Contact" <marketingacad.help@email.com>', // sender address
    to: [billingDetails.email, "kartikdps.kg@gmail.com"], // list of receivers
    subject: `Bicycle Drit OrderNo:${_id}`, // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };

  mailTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return `payment was successful  but something weent wrong while sending email contact Customer Care`;
    }
    return `payment was successful Email containing order details has been sent to you via Email`;
  });
};

exports.makePayment = (req, res) => {
  console.log(req.body);
  // Route for making payment
  var paymentDetails = {
    amount: req.body.amount,
    customerId: req.body.name,
    customerEmail: req.body.email,
    customerPhone: req.body.phone,
  };
  if (
    !paymentDetails.amount ||
    !paymentDetails.customerId ||
    !paymentDetails.customerEmail ||
    !paymentDetails.customerPhone
  ) {
    res.status(400).send("Payment failed");
  } else {
    var params = {};
    params["MID"] = config.PaytmConfig.mid;
    params["WEBSITE"] = config.PaytmConfig.website;
    params["CHANNEL_ID"] = "WEB";
    params["INDUSTRY_TYPE_ID"] = "Retail";
    params["ORDER_ID"] = req.body.orderId;
    params["CUST_ID"] = paymentDetails.customerId;
    params["TXN_AMOUNT"] = paymentDetails.amount;
    // callback url
    params["CALLBACK_URL"] = config.PaytmConfig.callBackURL;
    params["EMAIL"] = paymentDetails.customerEmail;
    params["MOBILE_NO"] = paymentDetails.customerPhone;

    checksum_lib.genchecksum(params, config.PaytmConfig.key, function (
      err,
      checksum
    ) {
      var txn_url = "https://securegw.paytm.in/order/process"; // for staging
      // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production
      console.log(txn_url);

      var form_fields = "";
      for (var x in params) {
        form_fields +=
          "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
      }
      form_fields +=
        "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";
      console.log(form_fields);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' +
          txn_url +
          '" name="f1">' +
          form_fields +
          '</form><script type="text/javascript">document.f1.submit();</script></body></html>'
      );
      res.end();
    });
  }
};

exports.paymentCallback = async (req, res) => {
  var body = "";

  req.on("data", function (data) {
    body += data;
  });

  req.on("end", function () {
    var html = "";
    var post_data = qs.parse(body);

    // received params in callback
    console.log("Callback Response: ", post_data, "\n");

    // verify the checksum
    var checksumhash = post_data.CHECKSUMHASH;
    // delete post_data.CHECKSUMHASH;
    var result = checksum_lib.verifychecksum(
      post_data,
      config.PaytmConfig.key,
      checksumhash
    );
    console.log("Checksum Result => ", result, "\n");

    // Send Server-to-Server request to verify Order Status
    var params = { MID: config.PaytmConfig.mid, ORDERID: post_data.ORDERID };

    checksum_lib.genchecksum(params, config.PaytmConfig.key, function (
      err,
      checksum
    ) {
      params.CHECKSUMHASH = checksum;
      post_data = "JsonData=" + JSON.stringify(params);

      var options = {
        hostname: "securegw-stage.paytm.in", // for staging
        // hostname: 'securegw.paytm.in', // for production
        port: 443,
        path: "/merchant-status/getTxnStatus",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": post_data.length,
        },
      };

      // Set up the request
      var response = "";
      var post_req = https.request(options, function (post_res) {
        post_res.on("data", function (chunk) {
          response += chunk;
        });

        post_res.on("end", async () => {
          console.log("S2S Response: ", response, "\n");

          var _result = JSON.parse(response);
          console.log(_result);
          if (_result.STATUS == "TXN_SUCCESS") {
            // update orderStatus

            try {
              const order = await Order.findById(_result.ORDERID);
              order.status = "Payment Successsful";
              await order.save();

              //updateStock
              try {
                const { products, billingDetails, total, _id } = order;
                products &&
                  products.map(async (product) => {
                    const { _id, quantity } = product;
                    const prod = await Product.findById(_id);

                    prod.stock = prod.stock - parseInt(quantity);
                    await prod.save();
                  });
                //   mailing
                // --------
              } catch (err) {
                console.log("stock Updation Failed");
              }
              //   stockUpdation complete-------
              console.log("send email");
              //   --------------------------
              //   res.send("payment successful");
              res.writeHead(200, { "Content-Type": "text/html" });
              res.write(
                '<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><title>Merchant Checkout Page</title><style>.container{width:80vw; margin: 20px !important;}</style></head><body><center><div class="container"><img class="m-5" src="https://www.nextseen.com/wp-content/uploads/2017/09/payment-successful.png"><h1 class="text-center m-5">Payment Successful</h1></center><div class="m-5 text-center"><a class="m-5 p-5 btn btn-primary btn-lg" href="http://localhost:3000/myorders">Head Back to see your order</a></div></div></body></html>'
              );
              res.end();
            } catch (err) {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.write(
                '<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><title>Merchant Checkout Page</title><style>.container{width:80vw; margin: 20px !important;}</style></head><body><center><div class="container"><img class="m-5" src="https://www.nextseen.com/wp-content/uploads/2017/09/payment-successful.png"><h1 class="text-center m-5"> payment successful But something wen\'t wrong, please call customer care or chat on whatsapp with us. See your order status for details</h1></center><div class="m-5 text-center"><a class="m-5 p-5 btn btn-primary btn-lg" href="http://localhost:3000/myorders">Head Back to see your order</a></div></div></body></html>'
              );
              res.end();
            }
          } else {
            try {
              const order = await Order.findById(_result.ORDERID);
              order.status = "Payment Failed";
              await order.save();
              res.writeHead(200, { "Content-Type": "text/html" });
              res.write(
                '<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><title>Merchant Checkout Page</title><style>.container{width:80vw; margin: 20px !important;}</style></head><body><center><div class="container"><img class="m-5" src="https://zbyteinc.org/wp-content/uploads/2018/06/payment_fail01.jpg"><h1 class="text-center m-5">Payment FAILED</h1></center><div class="m-5 text-center"><a class="m-5 p-5 btn btn-primary btn-lg" href="http://localhost:3000/myorders">Head Back to see your order</a></div></div></body></html>'
              );
              res.end();
            } catch (err) {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.write(
                '<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Payment FAILED</h1></center><a href="http://localhost:3000">Head Back</a></body></html>'
              );
              res.end();
            }
          }
        });
      });

      // post the data

      post_req.write(post_data);
      post_req.end();
    });
  });
};
