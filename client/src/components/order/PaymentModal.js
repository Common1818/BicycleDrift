/*eslint-disable */
import React from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

const displayRazorpay = async (total) => {
  console.log(total);
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("OOPS !!!! Gateway Failed to load.. Are you online ??");
    return;
  }

  const data = await fetch("/api/razorpay", {
    method: "POST",
    body: JSON.stringify({
      amount: total,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((t) => t.json());

  console.log(data);

  const options = {
    key: __DEV__ ? "rzp_test_52JHFOI3boJWpx" : "PRODUCTION_KEY",
    currency: data.currency,
    amount: data.amount.toString(),
    order_id: data.id,
    name: "Pay Securely",
    description: "Thank you for Choosing BicycleDrift",
    image: "http://localhost:3000/static/media/Logo.64d8c23f.PNG",
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name,
      email: "YourEmail@mail.com",
      phone_number: "XXXXXXXXXX",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const PaymentModal = (props) => {
  const {
    order,
    order: { _id, total, user, billingDetails },
  } = props;
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div class="row my-5">
            <div class="col-md-4 offset-md-4">
              <div class="card">
                <div class="card-body">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      displayRazorpay(total);
                    }}
                  >
                    <div class="form-group">
                      <label for="">CustomerId </label>
                      <input
                        class="form-control"
                        value={user}
                        type="text"
                        name="name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">orderId </label>
                      <input
                        class="form-control"
                        value={_id}
                        type="text"
                        name="orderId"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Email: </label>
                      <input
                        value={billingDetails && billingDetails.email}
                        class="form-control"
                        type="text"
                        name="email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Phone: </label>
                      <input
                        class="form-control"
                        value={billingDetails && billingDetails.mobileNumber}
                        type="text"
                        name="phone"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Amount: </label>
                      <input
                        value={total}
                        class="form-control"
                        type="text"
                        name="amount"
                      />
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        className="btn form-control btn-primary pay-with-paytm"
                      >
                        Pay Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PaymentModal;
