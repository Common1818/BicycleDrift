/*eslint-disable */
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import DetailsForm from "./DetailsForm";
import { fetchOrder, deleteOrder, updateAddress } from "../../actions/order";
import { redirectToPaytm } from "../../actions/payment";
import "./css/OrderPage.css";
import Loader from "../layout/Loader";
import PaymentModal from "./PaymentModal";

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

const displayRazorpay = async (total, orId) => {
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

  const options = {
    key: __DEV__ ? "rzp_test_52JHFOI3boJWpx" : "rzp_live_EdybhABLI9eugg",
    currency: data.currency,
    amount: data.amount.toString(),
    order_id: data.id,
    name: "Pay Securely",
    description: `OrderId:${orId}`,
    image: "http://www.vdbikes.com/static/media/Logo.64d8c23f.PNG",
    handler: function (response) {
      __DEV__
        ? window.location.replace("http://localhost:3000/myorders")
        : window.location.replace("http://www.vdbikes.com/myorders");
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

const OrderPage = ({
  fetchOrder,
  deleteOrder,
  updateAddress,
  order,
  order: { products, total, billingDetails },
  match,
  billingDetailsUpdated,
  orderLoader,
  user,
  redirectToPaytm,
}) => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    mobileNumber: "",
  });
  console.log(order.status);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  useEffect(() => {
    fetchOrder(match.params.orderId);
  }, []);

  const handleBilling = async () => {
    const addressUpdate = details.address;

    updateAddress(order._id, details);
  };
  // if (billingDetailsUpdated == true) {
  //   setModalShow(true);
  // }

  if (order.status && order.status !== "Payment Pending") {
    return <Redirect to="/" />;
  }

  // const handlePayment = () => {
  //   console.log("This is a payment button");
  //   displayRazorpay(total)
  // };

  return (
    <div className="order-page-container container-lg">
      {products ? (
        <>
          {" "}
          <div className="row">
            <div className="col-sm-8">
              <div className="products">
                {products &&
                  products.map((prod) => {
                    return (
                      <div key={prod._id} className="product">
                        <img src={prod.image} alt="" />
                        <div className="desc">
                          <h3>{prod.name}</h3>
                          <h3>{prod.price}</h3>
                          <h6>{prod.color}</h6>
                          <h6>X {prod.quantity}</h6>
                        </div>
                      </div>
                    );
                  })}

                <h2>SubTotal: {formatter.format(total)}</h2>
              </div>
            </div>

            {orderLoader ? (
              <Loader />
            ) : (
              <DetailsForm
                handleBilling={handleBilling}
                billingDetails={billingDetails}
                details={details}
                setDetails={setDetails}
              />
            )}
          </div>
          <div className="transac-buttons">
            <button
              onClick={(e) => {
                e.preventDefault();
                deleteOrder(order._id);
              }}
            >
              Cancel
            </button>
            <button
              className="payment-modal"
              disabled={billingDetailsUpdated ? false : true}
              onClick={(e) => {
                e.preventDefault();

                displayRazorpay(total, order._id);
              }}
            >
              Pay
            </button>
            {billingDetailsUpdated ? null : (
              <div className="text-danger">
                Update billing details to proceed
              </div>
            )}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order.order,
  user: state.auth.user,
  billingDetailsUpdated: state.order.billingDetailsUpdated,
  orderLoader: state.order.loading,
});

export default connect(mapStateToProps, {
  fetchOrder,
  deleteOrder,
  redirectToPaytm,
  updateAddress,
})(OrderPage);
