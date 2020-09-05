/*eslint-disable */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAdminOrder } from "../../actions/order";
import orderImage from "./orderImage.PNG";
import moment from "moment";

const AdminOrderPage = ({ match, fetchAdminOrder, order }) => {
  const { orderId } = match.params;
  useEffect(() => {
    fetchAdminOrder(orderId);
  }, []);

  console.log(order);

  const billingDetails = order && order.billingDetails;
  const products = order && order.products;
  return (
    <div className="user-orders-container">
      <div class="email-wrapper">
        <div class="email-preheader">
          <img src={orderImage}></img>
          <p class="tagline">Thanks For Choosing BicycleDrift</p>
        </div>
        <div class="email-container">
          <div class="email-title">order summary</div>
          <div class="row">
            <div class="col-xl-15">
              <small class="col-title">Order Id:</small>
              <div class="col-text -main">{order && order._id}</div>
            </div>
            <div class="col-xl-15">
              <small class="col-title">Order Status</small>
              <div style={{ color: "#152EA3" }} class="col-text">
                {order && order.status}
              </div>
            </div>
            <div class="col-xl-15">
              <small class="col-title">Order Date</small>
              <div class="col-text">
                {moment(order && order.createdAt).format(
                  "dddd, MMMM Do YYYY, h:mm:ss a"
                )}
              </div>
            </div>
            <div class="col-md-15">
              <small class="col-title">No. of Items</small>
              <div class="col-text">{order && order.totalQuantity}</div>
            </div>
            <div class="col-md-15">
              <small class="col-title">Grand Total</small>
              <div class="col-text">{order && order.total}</div>
            </div>
          </div>
          <div className="row">
            <div class="col-md-6">
              <div class="address">
                <div class="content-title">billing address</div>
                <p class="text">{`${
                  billingDetails && billingDetails.firstName
                } ${billingDetails && billingDetails.lastName}`}</p>
                <p class="text">{billingDetails && billingDetails.email} </p>
                <p class="text">{billingDetails && billingDetails.address}</p>
                <p class="text">{`${billingDetails && billingDetails.city} -${
                  billingDetails && billingDetails.pincode
                }`}</p>
                <p class="text">
                  {billingDetails && billingDetails.mobileNumber}
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="content-title -centered">Products Ordered</div>
            </div>
          </div>
          <div className="row">
            {products &&
              products.map((product) => {
                return (
                  <div className="col-md-6">
                    <div className="artwork-card">
                      <div class="artwork-card-image">
                        <img src={product.image} alt="" />
                      </div>
                      <div class="artwork-card-info">
                        <div class="title">{product.name}</div>
                        <div class="info">
                          <div class="subject">color: {product.color}</div>

                          <div class="subject">
                            Quantity: {product.quantity}
                          </div>
                          <div class="price">{product.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order.AdminOrder,
});

export default connect(mapStateToProps, { fetchAdminOrder })(AdminOrderPage);
