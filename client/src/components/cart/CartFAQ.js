import React from "react";

const CartFAQ = () => {
  return (
    <section className="faq-section" style={{ marginTop: "5px" }}>
      <div style={{ padding: "20px" }} className="container-xl">
        <h2>FAQ's</h2>
        <div className="row">
          <div className="col-md-12 ">
            <div className="faq" id="accordion">
              <div className="card">
                <div className="card-header" id="faqHeading-1">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-1"
                      data-aria-expanded="true"
                      data-aria-controls="faqCollapse-1"
                    >
                      <span className="badge">1</span>Will my Bike come Pre
                      Assembled?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-1"
                  className="collapse"
                  aria-labelledby="faqHeading-1"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Yes We'll deiver your bike completely assembled and ready
                      to ride
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-2">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-2"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-2"
                    >
                      <span className="badge">2</span> How to Contact Us?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-2"
                  className="collapse"
                  aria-labelledby="faqHeading-2"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      you can contact Us either on <b>WhatsApp</b> or on on
                      Mobile Number
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-3">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-3"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-3"
                    >
                      <span className="badge">3</span>How will i get my Order
                      Status?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-3"
                  className="collapse"
                  aria-labelledby="faqHeading-3"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      You'll be updated about your order status via Whatsapp
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-4">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-4"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-4"
                    >
                      <span className="badge">4</span> When can I expect my
                      order?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-4"
                  className="collapse"
                  aria-labelledby="faqHeading-4"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      After your order has been shipped it usually takes 5-10
                      Working Days to reach you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-5">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-5"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-5"
                    >
                      <span className="badge">5</span> Can i cancel My order
                      after Placing it?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-5"
                  className="collapse"
                  aria-labelledby="faqHeading-5"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      {" "}
                      You can <b>Cancel</b> your order anytime before it has
                      been <i>Shipped</i>. Once Your Order has been shipped
                      which usually takes 2-4 Working Days, you can not Cancel
                      it. Once you cancel your order amount will be refunded to
                      your bank account within 3-4 working Days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-6">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-6"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-6"
                    >
                      <span className="badge">6</span> Can i return my product
                      if i don't like it ?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-6"
                  className="collapse"
                  aria-labelledby="faqHeading-6"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      You <b>can Return</b> a Product if you receive something
                      other than what you ordered, But you <b>can't</b> return a
                      product if you don't like it, be sure before ordering. You
                      can also take our help before making a purchase of our{" "}
                      <b>WhatsApp</b> based <b>customer service</b>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-7">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-7"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-7"
                    >
                      <span className="badge">7</span> Are there any shipping
                      charges?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-7"
                  className="collapse"
                  aria-labelledby="faqHeading-7"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Shipping charges depend on your location , you'll need to
                      enter your pincode in order to check the delivery charges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartFAQ;
